"use client";

import Navbar from "@/components/ui/Navbar";
import TransactionModal from "@/components/ui/Plan_Modal";
import SheetTable from "@/components/ui/SheetTable";
import { useEffect, useState } from "react";

export default function SheetPage() {
  const [spreadsheetId, setSpreadsheetId] = useState<string | null>(null);
  const [sheetData, setSheetData] = useState<any[][]>([]);
  const [open, setOpen] = useState(false);

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
    <>
    <Navbar />
    <div className="p-6">
      
      <SheetTable values={sheetData} />
      <h1 className="text-xl font-semibold mb-4">January Sheet</h1>
      <button
        onClick={fetchSheetData}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Load Data
      </button>
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-blue-600 px-5 py-2.5 text-white shadow-md hover:bg-blue-700 active:scale-95 transition"
      >
        + Add Transaction
      </button>

      <TransactionModal open={open} onClose={() => setOpen(false)} />
    </div>
    </>
  );
}
