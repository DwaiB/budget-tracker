import { getAllSheets } from "../getAllSheets";
import { GetBudgetSheet } from "../getBudgetSheet";

export async function findSheetId(
  spreadsheetId: string,
  title: string
): Promise<number> {
  const sheets = await GetBudgetSheet(spreadsheetId);
  const sheet = sheets.sheets?.filter(s => s.properties?.title === title).find(s => s.properties?.sheetId);
  if (!sheet || !sheet.properties || !sheet.properties.sheetId) throw new Error(`Sheet "${title}" not found`);
  return sheet.properties.sheetId;
}