import { SHEET_TABS } from "@/constants/app_constants";
import { getAllSheets } from "../getAllSheets";

export async function readSheet(
  spreadsheetId: string,
): Promise<any[][]> {
  try {
    
    const sheets = await getAllSheets();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: SHEET_TABS.BUDGET_PLANNING,
    });
    return response.data.values || [];

  } catch (error) {
    console.error("Write to sheet failed:", error);
    throw new Error("Failed to write to sheet");
  }
}