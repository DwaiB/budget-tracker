import { SHEET_TABS, SHEET_RANGES } from "@/lib/constants/app_constants";
import { writeSheetRow } from "./writeSheetRow";

export async function writeSheet(
  spreadsheetId: string,
  sheetName: typeof SHEET_TABS[keyof typeof SHEET_TABS],
  values: string[][]
): Promise<void> {
  try {
    const range = SHEET_RANGES[sheetName as keyof typeof SHEET_RANGES]?.DATA_RANGE;
    if (!range) {
      throw new Error("Invalid sheet name or range not defined");
    }
    writeSheetRow(spreadsheetId, sheetName, range, values);
  } catch (error) {
    console.error("Write to sheet failed:", error);
    throw new Error("Failed to write to sheet");
  }
}