"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function GoogleSignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (!session) {
    return (
      <button
        onClick={() => signIn("google")}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Sign in with Google
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span>{session.user?.email}</span>
      <button
        onClick={() => signOut()}
        className="px-3 py-1 bg-gray-200 rounded"
      >
        Sign out
      </button>
    </div>
  );
}
