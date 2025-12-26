import { getAllSheets } from "../getAllSheets";

export async function createSheetTab(
  spreadsheetId: string,
  title: string
): Promise<void> {
  const sheets = await getAllSheets();
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          addSheet: {
            properties: {
              title: title,
            },
          },
        },
      ],
    },
  });
}