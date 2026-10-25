# Launch checklist

Run `pnpm check:launch` — it lists everything below that can be checked automatically.

## Business and legal details (`src/config/site.ts`)

- [ ] Registered business name and legal form
- [ ] Owner / authorised representative
- [ ] Postal address (street, postal code, city)
- [ ] Business email address (also shown in the footer and contact page)
- [ ] VAT: USt-IdNr. or confirmation of the small-business rule (§ 19 UStG)
- [ ] Register court and number (only if registered)
- [ ] Person responsible for content (§ 18 Abs. 2 MStV), if different from the representative
- [ ] Email provider used for SMTP (named in the privacy policy) + signed data processing agreement
- [ ] Competent data protection supervisory authority (depends on your federal state)
- [ ] Decision on consumer dispute resolution (§ 36 VSBG) — currently a marked placeholder in the Impressum
- [ ] Date of the legal review (`legalReviewDate`)
- [ ] Optional: phone number, typical response time, founder profile, social media profiles

## Legal review

- [ ] Impressum and Datenschutzerklärung reviewed by a qualified person for the actual business and processing activities
- [ ] Hosting details in the privacy policy match your Vercel plan and data processing agreement
- [ ] English legal pages updated to match the reviewed German texts

## Content

- [ ] Review all German and English texts for accuracy about your actual services and capabilities
- [ ] Portfolio: entries are currently `concept` (illustrative). Replace or extend with real `client` or `demo` projects when available
- [ ] Decide whether to publish price ranges (FAQ currently explains pricing factors without numbers)

## SEO / GEO trust data (needed for the best AI-search visibility)

- [ ] Named founder with verifiable credentials and short bio (`siteConfig.founder`)
- [ ] Public email, phone and postal address (`siteConfig.contact` / `legal`)
- [ ] Profile links: Google Business Profile, LinkedIn, relevant directories (`siteConfig.socials`)
- [ ] Real case studies or testimonials with the client's written permission (never unverified numbers)
- [ ] Bump `siteConfig.contentUpdated` before each content release
- [ ] Verify the site in Google Search Console and Bing Webmaster Tools; re-run the SEO/GEO/AEO audit on the live URL

## Technical

- [ ] `NEXT_PUBLIC_SITE_URL` set to the production domain
- [ ] SMTP variables set; test inquiry received with correct Reply-To
- [ ] Domain connected in Vercel, HTTPS active
- [ ] Sitemap submitted in Google Search Console
- [ ] `pnpm lint && pnpm typecheck && pnpm test && pnpm build && pnpm test:e2e` all pass
