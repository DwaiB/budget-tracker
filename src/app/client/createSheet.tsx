"use client";

export default function CreateSheetButton() {
  async function createSheet() {
    const res = await fetch("/api/sheets/create", {
      method: "POST",
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("API error:", text);
      alert("Failed to create sheet");
      return;
    }

    const data = await res.json();

    localStorage.setItem("spreadsheetId", data.spreadsheetId);
    // window.open(data.spreadsheetUrl, "_blank");
  }

  return (
    <button onClick={createSheet}>
      Create Google Sheet
    </button>
  );
}
