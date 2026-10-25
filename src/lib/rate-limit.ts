export interface RateLimitResult {
  allowed: boolean;
  retryAfterMs: number;
}

export interface RateLimiter {
  check(key: string, now?: number): RateLimitResult;
  size(): number;
}

interface RateLimiterOptions {
  limit: number;
  windowMs: number;
  /** Upper bound of tracked keys; stale keys are evicted first. */
  maxKeys?: number;
}

/**
 * Sliding-window limiter kept in memory. On serverless platforms each instance
 * has its own memory, so this is best-effort protection — see README.
 */
export function createRateLimiter({
  limit,
  windowMs,
  maxKeys = 5000,
}: RateLimiterOptions): RateLimiter {
  const hits = new Map<string, number[]>();

  function evict(now: number) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= windowMs)) hits.delete(key);
    }
    while (hits.size >= maxKeys) {
      const oldest = hits.keys().next().value;
      if (oldest === undefined) break;
      hits.delete(oldest);
    }
  }

  return {
    check(key, now = Date.now()) {
      const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
      if (recent.length >= limit) {
        hits.set(key, recent);
        return { allowed: false, retryAfterMs: windowMs - (now - recent[0]) };
      }
      if (!hits.has(key) && hits.size >= maxKeys) evict(now);
      hits.set(key, [...recent, now]);
      return { allowed: true, retryAfterMs: 0 };
    },
    size: () => hits.size,
  };
}
