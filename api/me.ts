import type { VercelRequest, VercelResponse } from "@vercel/node";
import { isAuthenticated } from "./_auth.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!isAuthenticated(req)) {
    return res.status(401).json({ authenticated: false });
  }

  const email = process.env.LAYZOX_ADMIN_EMAIL!;

  return res.status(200).json({
    authenticated: true,
    user: {
      name: "Admin",
      email,
    },
  });
}
