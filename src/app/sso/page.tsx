"use client";

import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  SAMLAuthProvider,
  getRedirectResult,
  signInWithRedirect,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  User
} from "firebase/auth";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_CUSTOM!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

export default function SSOPage() {
  const [msg, setMsg] = useState("Starting SSO…");

  useEffect(() => {
    const run = async () => {
      const search = new URL(window.location.href).searchParams;
      const nonce = search.get("verify");
      if (!nonce) {
        setMsg("Invalid launch (no nonce). Please start sign-in from the desktop app.");
        return;
      }

      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      await setPersistence(auth, browserLocalPersistence).catch(() => {});
      const provider = new SAMLAuthProvider("saml.markit");

      async function deepLinkWithIdToken(idToken: string) {
        const res = await fetch("/api/auth/handshake", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ idToken, verify: nonce }),
        });
        if (!res.ok) {
          setMsg("Handshake failed. Please try again.");
          return;
        }
        const { code } = await res.json();
        window.location.replace(`/launch#code=${encodeURIComponent(code)}`);
      }

      const tryGetResult = async () => {
        try {
          return await getRedirectResult(auth);
        } catch {
          return null;
        }
      };

      const nextTick = () => new Promise<void>((resolve) => setTimeout(resolve, 0));

      let cred = await tryGetResult();
      if (!cred?.user) {
        await nextTick();
        cred = await tryGetResult();
      }
      let user: User | null = cred?.user ?? null;

      let unsub: (() => void) | undefined;
      const stateP = new Promise<User | null>((resolve) => {
        unsub = onAuthStateChanged(auth, (u) => {
          if (u && !user) {
            resolve(u);
          }
        });
        setTimeout(() => resolve(null), 2000);
      });

      if (!user) {
        const u = await stateP;
        unsub?.();
        if (u) user = u;
      } else {
        unsub?.();
      }

      if (user) {
        try {
          const idToken = await user.getIdToken(true);
          await deepLinkWithIdToken(idToken);
          return;
        } catch {
          setMsg("Could not get ID token. Please try again.");
          return;
        }
      }

      const already = !!sessionStorage.getItem("did-saml-redirect");
      if (!already) {
        sessionStorage.setItem("did-saml-redirect", "1");
        await signInWithRedirect(auth, provider);
        return;
      }

      setMsg("Could not complete sign-in. Please try again or contact support.");
    };

    run();
  }, []);

  return <div style={{ padding: 24 }}>{msg}</div>;
}