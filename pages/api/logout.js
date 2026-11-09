import { serialize } from "cookie";
import { COOKIE_NAME } from "../../lib/checkAuth";

export default function handler(req, res) {
  const expired = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: -1, // Expire immediately
    path: "/",
  };
  res.setHeader("Set-Cookie", [
    serialize(COOKIE_NAME, "", expired),
    // Clear the old unsigned cookie from before the session change.
    serialize("admin_auth", "", expired),
  ]);
  res.status(200).json({ success: true });
}
