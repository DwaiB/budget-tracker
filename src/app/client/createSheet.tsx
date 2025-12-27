"use client";

export default function CreateSheetButton() {
  async function createGoogleSheet() {

    const response = await fetch("/api/sheets/page/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      }),
    });

    const data = await response.json();
    const spreadsheetId = data.spreadsheetId || "";

    localStorage.setItem("spreadsheetId", spreadsheetId);
  }

  return (
    <button onClick={createGoogleSheet}>
      Create Google Sheet
    </button>
  );
}
