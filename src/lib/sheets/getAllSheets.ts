import { getServerSession } from "next-auth";
import { google, sheets_v4 } from "googleapis";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

  export async function getAllSheets(): Promise<sheets_v4.Sheets> {
  const session = await getServerSession(authOptions);
  if (!session?.accessToken) {
    throw new Error("Unauthorized");
  }

  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: session.accessToken });

  const sheets = google.sheets({ version: "v4", auth });

  return sheets;
}