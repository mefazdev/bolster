import { serialize } from "cookie";
import { COOKIE_NAME, SESSION_SECONDS, checkCredentials, createSessionToken } from "../../lib/checkAuth";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { username, password } = req.body || {};
  if (!checkCredentials(username, password)) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  const token = createSessionToken();
  if (!token) {
    return res.status(500).json({ success: false, message: "Login is not configured on the server" });
  }

  res.setHeader(
    "Set-Cookie",
    serialize(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_SECONDS,
      path: "/",
    })
  );
  return res.status(200).json({ success: true });
}
