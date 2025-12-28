import { NextResponse } from "next/server";
import { getAllSheets } from "../getAllSheets";
import { CreateSheetResponse } from "@/models/sheet/createSheet";
import { SHEET_TABS } from "@/lib/constants/app_constants";
import { updateSheetTabTitle } from "../tab/updateSheetTabTitle";
import { InitializeBudgetSheet } from "../initBudgetSheet";

export async function createSheet(
): Promise<CreateSheetResponse> {
  const sheets = await getAllSheets();
  const response = await sheets.spreadsheets.create({
      requestBody: {
        properties: {
          title: "My Budget Sheet",
        },
      },
    });
  if(response.status == 200) {
    await InitializeBudgetSheet(response.data.spreadsheetId || "");
  }
  const data =  response.data || { spreadsheetId: "", spreadsheetUrl: "" };
  return {
      spreadsheetId: data.spreadsheetId,
      spreadsheetUrl: data.spreadsheetUrl,
    };
}