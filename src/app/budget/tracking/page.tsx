"use client";

import SheetTable from "@/components/ui/SheetTable";
import { useEffect, useState } from "react";

export default function SheetPage() {
  const [spreadsheetId, setSpreadsheetId] = useState<string | null>(null);
  const [sheetData, setSheetData] = useState<any[][]>([]);

  useEffect(() => {
    const id = localStorage.getItem("spreadsheetId");
    setSpreadsheetId(id);
  }, []);

  async function fetchSheetData() {
    if (!spreadsheetId) return;

    const response = await fetch("/api/sheets/page/read", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ string: spreadsheetId }),
    });

    const data = await response.json();
    setSheetData(data);
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">January Sheet</h1>
      <button
        onClick={fetchSheetData}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Load Data
      </button>
      <SheetTable values={sheetData} />
    </div>
  );
}
