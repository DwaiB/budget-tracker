import { NextResponse } from "next/server";
import { readSheet } from "@/lib/sheets/page/readSheet";

export async function POST(req: Request): Promise<NextResponse<any[][]>> {
  try {
    const { string: spreadsheetId } = await req.json();

    return NextResponse.json(await readSheet(spreadsheetId));

  } catch (error) {
    console.error("Create sheet failed:", error);
    throw new Error("Failed to create sheet");
  }
}
