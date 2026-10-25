import nodemailer from "nodemailer";
import { readSmtpConfig, type SmtpConfig } from "@/lib/env";
import { logServerEvent } from "@/lib/logger";
import { formatInquiryEmail, type InquiryMeta } from "./format";
import type { Inquiry } from "./schema";

export interface InquiryDelivery {
  send(inquiry: Inquiry, meta: InquiryMeta): Promise<void>;
}

export function createSmtpDelivery(config: SmtpConfig): InquiryDelivery {
  const transport = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: { user: config.user, pass: config.pass },
    requireTLS: !config.secure,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  return {
    async send(inquiry, meta) {
      const email = formatInquiryEmail(inquiry, meta);
      await transport.sendMail({
        from: config.from,
        to: config.to,
        replyTo: { name: inquiry.name.replace(/[\r\n"]/g, " "), address: inquiry.email },
        subject: email.subject,
        text: email.text,
      });
    },
  };
}

let cached: { delivery: InquiryDelivery | null } | undefined;

/** The configured delivery, or null when SMTP is not (correctly) set up. */
export function getInquiryDelivery(): InquiryDelivery | null {
  if (cached) return cached.delivery;
  const result = readSmtpConfig();
  if (result.status === "invalid")
    logServerEvent("inquiry.smtp_config_invalid", { keys: result.keys });
  cached = { delivery: result.status === "configured" ? createSmtpDelivery(result.config) : null };
  return cached.delivery;
}
