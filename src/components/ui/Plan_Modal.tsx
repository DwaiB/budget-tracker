"use client";

import { CashMovementTypes } from "@/models/common/money_movement.enums";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  data: string[][];
  setData: (data: string[][]) => void;
  onClose: () => void;
}

export default function TransactionModal({
  open,
  onClose,
  data,
  setData,
}: Props) {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [movement, setMovement] = useState<CashMovementTypes>(
    CashMovementTypes.DEBIT
  );

  useEffect(() => {
    if (open) {
      setType(data[0]?.[0] ?? "");
      setCategory(data[1]?.[0] ?? "");
    }
  }, [open, data]);

  if (!open) return null;

  const handleOk = () => {
    const newData: string[][] = [
      data[0] ? [...data[0]] : [],
      data[1] ? [...data[1]] : [],
      data[2] ? [...data[2]] : [],
    ];

    if (type && !newData[0].includes(type)) {
      newData[0].push(type);
    }

    if (category && !newData[1].includes(category)) {
      newData[1].push(category);
    }

    if (movement && !newData[2].includes(movement)) {
      newData[2].push(movement);
    }

    setData(newData);
    onClose();
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-6 animate-scaleIn">
        <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>

        {/* TYPE */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Type</label>
          <input
            list="types"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Select or enter type"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-blue-500"
          />
          <datalist id="types">
            {data[0]?.map((t) => (
              <option key={t} value={t} />
            ))}
          </datalist>
        </div>

        {/* CATEGORY */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Category</label>
          <input
            list="categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Select or enter category"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-1 focus:ring-blue-500"
          />
          <datalist id="categories">
            {data[1]?.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>

        {/* MOVEMENT */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">Movement</label>
          <select
            value={movement}
            onChange={(e) => setMovement(e.target.value as CashMovementTypes)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:ring-1 focus:ring-blue-500"
          >
            <option value={CashMovementTypes.DEBIT}>Debit</option>
            <option value={CashMovementTypes.CREDIT}>Credit</option>
            <option value={CashMovementTypes.SAVING}>Savings</option>
          </select>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleOk}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700 active:scale-95 transition"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
