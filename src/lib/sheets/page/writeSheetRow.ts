import { getAllSheets } from "../getAllSheets";
import { SHEET_TABS, SHEET_RANGES } from "@/constants/app_constants";


export async function writeSheetRow(
  spreadsheetId: string,
  sheetName: typeof SHEET_TABS[keyof typeof SHEET_TABS],
  sheetRange: string,
  values: any[][]
): Promise<void> {
  try {

    const sheets = await getAllSheets();

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!${sheetRange}`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: values
      },
    });
  } catch (error) {
    console.error("Write to sheet failed:", error);
    throw new Error("Failed to write to sheet");
  }
}