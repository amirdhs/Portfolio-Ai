import { handleInquiry } from "@/lib/inquiry/handler";
import { getInquiryDelivery } from "@/lib/inquiry/mailer";
import { logServerEvent } from "@/lib/logger";
import { createRateLimiter } from "@/lib/rate-limit";

const limiter = createRateLimiter({ limit: 5, windowMs: 10 * 60 * 1000 });

export async function POST(request: Request): Promise<Response> {
  return handleInquiry(request, {
    getDelivery: getInquiryDelivery,
    limiter,
    now: Date.now,
    log: logServerEvent,
  });
}
