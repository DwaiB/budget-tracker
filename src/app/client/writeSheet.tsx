"use client";

export default function SaveTransactionButton() {
  async function saveData() {
    const spreadsheetId = localStorage.getItem("spreadsheetId");

    if (!spreadsheetId) {
      alert("Create a sheet first");
      return;
    }

    await fetch("/api/sheets/write", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        spreadsheetId,
        values: [
          ["2025-01-10", "Food", -250, "Lunch"],
        ],
      }),
    });
  }

  return <button onClick={saveData}>Save Transaction</button>;
}
