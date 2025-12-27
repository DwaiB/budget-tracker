"use client";

import CreateSheetButton from "../client/createSheet";
import SaveBudgetButton from "../client/saveBudgetButton";

export default function BudgetPage() {
  return (
    <>
      <h1>My Budget</h1>
      <SaveBudgetButton />
      <CreateSheetButton />
    </>
  );
}
