import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

let app: App | null = null;

export const firebaseConfig = {
  apiKey: "AIzaSyAglUEgCWfvRokwThWfHjfsa23O0yluqs4",
  authDomain: "markit-aff0e.web.app",
  projectId: "markit-aff0e",
  storageBucket: "markit-aff0e.firebasestorage.app",
  messagingSenderId: "622595107704",
  appId: "1:622595107704:web:d3209a4ef1418e9c7ef68d",
  measurementId: "G-50P8B6HBF8"
};

export function getAdminApp(): App {
  if (app) return app;
  const b64 = process.env.FIREBASE_SERVICE_ACCOUNT_B64;
  if (!b64) throw new Error("FIREBASE_SERVICE_ACCOUNT_B64 is not set");
  const json = JSON.parse(Buffer.from(b64, "base64").toString("utf8"));
  app = getApps()[0] ?? initializeApp({ credential: cert(json) });
  return app;
}

export const adminAuth = () => getAuth(getAdminApp());
export const adminDb = () => getFirestore(getAdminApp());