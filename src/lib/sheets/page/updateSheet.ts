import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { google } from "googleapis";
import { SHEET_TABS } from "@/constants/app_constants";

export async function writeSheet(
  spreadsheetId: string,
  sheetName: typeof SHEET_TABS[keyof typeof SHEET_TABS],
  range: string,
  values: any[][]
): Promise<void> {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.accessToken) {
      throw new Error("Unauthorized");
    }

    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: session.accessToken });

    const sheets = google.sheets({ version: "v4", auth }); 
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${sheetName}!${range}`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: values,
      },
    });
  } catch (error) {
    console.error("Write to sheet failed:", error);
    throw new Error("Failed to write to sheet");
  }
}