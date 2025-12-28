import { getAllSheets } from "../getAllSheets";
import { SHEET_TABS, SHEET_RANGES } from "@/lib/constants/app_constants";


export async function writeSheetRow(
  spreadsheetId: string,
  sheetName: string,
  sheetRange: string,
  values: any[][]
): Promise<void> {
  try {

    const sheets = await getAllSheets();

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}`,
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