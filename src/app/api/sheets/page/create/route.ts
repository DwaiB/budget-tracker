import { NextResponse } from "next/server";
import { createSheet } from "@/lib/sheets/page/createSheet";
import { CreateSheetResponse } from "@/models/sheet/createSheet";

export async function POST(req: Request) :Promise<NextResponse<CreateSheetResponse>>{
  try {
    
    return NextResponse.json(await createSheet());

  } catch (error) {
    console.error("Create sheet failed:", error);
    throw new Error("Failed to create sheet");
  }
}
