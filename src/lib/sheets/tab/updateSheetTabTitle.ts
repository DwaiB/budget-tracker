import { findSheetId } from "./findSheetTabId";
import { getAllSheets } from "../getAllSheets";

export async function updateSheetTabTitle(
  spreadsheetId: string,
  old_title: string,
  new_title: string
): Promise<void> {
  const sheets = await getAllSheets();
  const sheetId = await findSheetId(spreadsheetId,old_title);
  await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            updateSheetProperties: {
              fields: "title",
              properties: {
                sheetId,
                title: new_title,
              }
            },
          },
        ],
      },
    });
}