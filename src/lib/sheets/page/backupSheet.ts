import { getServerSession } from "next-auth";
import { google } from "googleapis";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { APP_CONSTANTS } from "@/constants/app_constants";

export async function createBackupSheet(
  spreadsheetId: string,
): Promise<string> {
  try {
    const session = await getServerSession(authOptions);
  
    if (!session?.accessToken) {
     throw new Error("Unauthorized");
    }

    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: session.accessToken });
    
    const drive = google.drive({ version: "v3", auth });

    const sourceSpreadsheetId = spreadsheetId;

    const copyRes = await drive.files.copy({
      fileId: sourceSpreadsheetId,
      requestBody: {
        name: APP_CONSTANTS.BACKUP_SHEET_NAME+`_${new Date().toISOString()}`,
      },
    });

    const newSpreadsheetId = copyRes.data.id;

    console.log("New spreadsheet:", newSpreadsheetId);
    
    return newSpreadsheetId!;

  } catch (error) {
    console.error("Create sheet failed:", error);
    throw new Error("Failed to create sheet");
  }
}


