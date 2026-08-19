import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createSession, setSessionCookie } from "./_auth.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body ?? {};

  const adminEmail = process.env.LAYZOX_ADMIN_EMAIL;
  const adminPassword = process.env.LAYZOX_ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    return res.status(500).json({ error: "Authentication is not configured" });
  }

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    email.trim().toLowerCase() !== adminEmail.trim().toLowerCase() ||
    password !== adminPassword
  ) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const normalizedEmail = adminEmail.trim().toLowerCase();
  const token = createSession(normalizedEmail);

  setSessionCookie(res, token);

  return res.status(200).json({
    user: {
      name: "Admin",
      email: normalizedEmail,
    },
  });
}
