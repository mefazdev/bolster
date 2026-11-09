// Admin-only add/delete for the Instagram links shown on the home page.
// Browsers can only read the "link" collection (see firestore.rules); all writes go through here.
import { FieldValue } from "firebase-admin/firestore";
import { isAdmin } from "../../lib/checkAuth";
import { getAdminDb } from "../../lib/firebaseAdmin";

const COLLECTION = "link";

// Accept only Instagram post/reel URLs, normalised to https://www.instagram.com/...
function normaliseInstagramUrl(input) {
  if (typeof input !== "string" || input.length > 500) return null;
  let url;
  try {
    url = new URL(input.trim());
  } catch {
    return null;
  }
  const host = url.hostname.toLowerCase();
  if (url.protocol !== "https:" || !(host === "instagram.com" || host === "www.instagram.com")) return null;
  if (!/^\/(p|reel|tv)\/[\w-]+\/?$/.test(url.pathname)) return null;
  return `https://www.instagram.com${url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`}`;
}

export default async function handler(req, res) {
  if (!isAdmin(req)) {
    return res.status(401).json({ success: false, message: "Not logged in" });
  }

  try {
    if (req.method === "POST") {
      const link = normaliseInstagramUrl(req.body?.link);
      if (!link) {
        return res.status(400).json({ success: false, message: "Paste an Instagram post or reel link" });
      }
      const ref = await getAdminDb().collection(COLLECTION).add({
        link,
        timestamp: FieldValue.serverTimestamp(),
      });
      return res.status(201).json({ success: true, id: ref.id });
    }

    if (req.method === "DELETE") {
      const id = req.body?.id;
      if (typeof id !== "string" || !/^[A-Za-z0-9_-]{1,128}$/.test(id)) {
        return res.status(400).json({ success: false, message: "Invalid id" });
      }
      await getAdminDb().collection(COLLECTION).doc(id).delete();
      return res.status(200).json({ success: true });
    }

    res.setHeader("Allow", "POST, DELETE");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  } catch (e) {
    console.error("Dashboard link update failed:", e);
    return res.status(500).json({ success: false, message: "Could not save the change" });
  }
}
