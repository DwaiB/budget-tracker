"use client";

import { useSession } from "next-auth/react";

export default function SaveBudgetButton() {
  const { data: session, status } = useSession();
  const spreadsheetId = localStorage.getItem("spreadsheetId");

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Please sign in</p>;

  return (
    <button
      onClick={saveData}
      className="px-4 py-2 bg-blue-600 text-white"
    >
      Save to Google Sheets
    </button>
  );

  async function saveData() {
    await fetch("/api/sheets/write", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        spreadsheetId,
        values: [["2025-01", "Food", -250, "Lunch"]],
      }),
    });
  }
}
