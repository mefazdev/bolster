// Server-only Firestore access with admin rights (bypasses security rules).
// Use only in API routes / getServerSideProps, after checking the admin session.
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// FIREBASE_SERVICE_ACCOUNT holds the service-account JSON key, either as raw JSON
// or base64-encoded (easier to paste into hosting env settings).
function loadServiceAccount() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) return null;
  const json = raw.trim().startsWith("{") ? raw : Buffer.from(raw, "base64").toString("utf8");
  return JSON.parse(json);
}

export function getAdminDb() {
  if (!getApps().length) {
    const serviceAccount = loadServiceAccount();
    if (!serviceAccount) {
      throw new Error("FIREBASE_SERVICE_ACCOUNT is not set; dashboard changes are disabled.");
    }
    initializeApp({ credential: cert(serviceAccount) });
  }
  return getFirestore();
}
