import { SHEET_RANGES, SHEET_TABS } from "@/constants/app_constants";
import { updateSheetTabTitle } from "./tab/updateSheetTabTitle";
import { createSheetTab } from "./tab/createSheetTab";
import { writeSheetRow } from "./page/writeSheetRow";

export async function InitializeBudgetSheet(
  spreadSheetId: string,
): Promise<void> {
  updateSheetTabTitle(spreadSheetId, "Sheet1", SHEET_TABS.BUDGET_TRACKER);
  createSheetTab(spreadSheetId, SHEET_TABS.BUDGET_PLANNING);
  writeSheetRow(spreadSheetId, SHEET_TABS.BUDGET_PLANNING,SHEET_RANGES.BUDGET_PLANNING.HEADER_ROW, [
    ["Type","Subtype","Movement"]
  ]);

}