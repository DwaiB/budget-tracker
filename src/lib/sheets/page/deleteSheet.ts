import { google } from "googleapis";
import { getAllSheets } from "../getAllSheets";

export async function deleteSheetRow(
  spreadsheetId: string,
  sheetId: number,   // NOT sheet name
  rowIndex: number   // 1-based (UI)
) {
  const sheets = await getAllSheets();

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          deleteDimension: {
            range: {
              sheetId,
              dimension: "ROWS",
              startIndex: rowIndex, 
              endIndex: rowIndex,
            },
          },
        },
      ],
    },
  });
}
