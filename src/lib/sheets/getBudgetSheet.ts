import { getAllSheets } from "./getAllSheets";
import { sheets_v4 } from "googleapis";
export async function GetBudgetSheet(
  spreadsheetId: string,
): Promise<sheets_v4.Schema$Spreadsheet> {
  const sheets = await getAllSheets();
  const sheet = await sheets.spreadsheets.get({
    spreadsheetId,
 });
  return sheet.data;
}