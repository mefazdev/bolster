// Server-only admin session helpers. The admin cookie holds "<expiry>.<signature>",
// where the signature is an HMAC of the expiry made with SECRET_KEY, so it can't be
// forged or extended without the key. Use only in API routes and getServerSideProps.
import crypto from "crypto";
import { parse } from "cookie";

export const COOKIE_NAME = "admin_session";
export const SESSION_SECONDS = 60 * 60 * 8; // 8 hours

function getSecret() {
  const secret = process.env.SECRET_KEY;
  // Fail closed: without a strong key, no session is ever valid.
  if (!secret || secret.length < 32) {
    console.error("SECRET_KEY is missing or shorter than 32 characters; admin login is disabled.");
    return null;
  }
  return secret;
}

function sign(value, secret) {
  return crypto.createHmac("sha256", secret).update(value).digest("hex");
}

function safeEqual(a, b) {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  return bufA.length === bufB.length && crypto.timingSafeEqual(bufA, bufB);
}

// Returns a new session token, or null if SECRET_KEY isn't configured.
export function createSessionToken() {
  const secret = getSecret();
  if (!secret) return null;
  const expiry = String(Date.now() + SESSION_SECONDS * 1000);
  return `${expiry}.${sign(expiry, secret)}`;
}

export function isAdmin(req) {
  const secret = getSecret();
  if (!secret || !req) return false;

  const token = parse(req.headers.cookie || "")[COOKIE_NAME];
  if (!token) return false;

  const [expiry, signature] = token.split(".");
  if (!expiry || !signature) return false;
  if (!safeEqual(signature, sign(expiry, secret))) return false;
  return Number(expiry) > Date.now();
}

// Constant-time credential check against ADMIN_USERNAME / ADMIN_PASSWORD.
export function checkCredentials(username, password) {
  const expectedUser = process.env.ADMIN_USERNAME;
  const expectedPass = process.env.ADMIN_PASSWORD;
  if (!expectedUser || !expectedPass) {
    console.error("ADMIN_USERNAME / ADMIN_PASSWORD are not set; admin login is disabled.");
    return false;
  }
  if (typeof username !== "string" || typeof password !== "string") return false;
  // Evaluate both so the response time doesn't reveal which one was wrong.
  const userOk = safeEqual(username, expectedUser);
  const passOk = safeEqual(password, expectedPass);
  return userOk && passOk;
}
