import type { VercelRequest, VercelResponse } from "@vercel/node";
import crypto from "node:crypto";

export function getCookie(req: VercelRequest, name: string): string | null {
  const cookies = req.headers.cookie
    ?.split(";")
    .map((part) => part.trim());

  const found = cookies?.find((cookie) => cookie.startsWith(`${name}=`));

  return found ? decodeURIComponent(found.slice(name.length + 1)) : null;
}

export function createSession(email: string): string {
  const secret = process.env.LAYZOX_AUTH_SECRET;

  if (!secret) {
    throw new Error("LAYZOX_AUTH_SECRET is not configured");
  }

  return crypto
    .createHmac("sha256", secret)
    .update(email)
    .digest("hex");
}

export function isAuthenticated(req: VercelRequest): boolean {
  const email = process.env.LAYZOX_ADMIN_EMAIL;
  const token = getCookie(req, "layzox_session");

  if (!email || !token) return false;

  const expected = createSession(email);

  return crypto.timingSafeEqual(
    Buffer.from(token),
    Buffer.from(expected),
  );
}

export function setSessionCookie(res: VercelResponse, token: string) {
  res.setHeader(
    "Set-Cookie",
    `layzox_session=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400`,
  );
}

export function clearSessionCookie(res: VercelResponse) {
  res.setHeader(
    "Set-Cookie",
    "layzox_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0",
  );
}
