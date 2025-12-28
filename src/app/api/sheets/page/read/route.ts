import { NextResponse } from "next/server";
import { readSheet } from "@/lib/sheets/page/readSheet";
import { SHEET_TABS } from "@/lib/constants/app_constants";

export async function POST(req: Request): Promise<NextResponse<any[][]>> {
  try {
    const { string: spreadsheetId, string: range } = await req.json();

    return NextResponse.json(await readSheet(spreadsheetId, range));

  } catch (error) {
    console.error("Create sheet failed:", error);
    throw new Error("Failed to create sheet");
  }
}
