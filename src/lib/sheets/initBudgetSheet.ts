import { SHEET_RANGES, SHEET_TABS } from "@/lib/constants/app_constants";
import { updateSheetTabTitle } from "./tab/updateSheetTabTitle";
import { createSheetTab } from "./tab/createSheetTab";
import { writeSheetRow } from "./page/writeSheetRow";

export async function InitializeBudgetSheet(
  spreadSheetId: string,
): Promise<void> {
  await updateSheetTabTitle(spreadSheetId, "Sheet1", SHEET_TABS.BUDGET_TRACKER);
  await createSheetTab(spreadSheetId, SHEET_TABS.BUDGET_PLANNING);
  await writeSheetRow(spreadSheetId, SHEET_TABS.BUDGET_PLANNING,SHEET_RANGES.BUDGET_PLANNING.HEADER_ROW, [
    ["Type","Subtype","Movement"]
  ]);

}