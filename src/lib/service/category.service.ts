import { Category } from "@/models/category/category.types";
import { readSheet } from "../sheets/page/readSheet";
import { SHEET_TABS } from "../constants/app_constants";
import { CashMovementTypes } from "@/models/common/money_movement.enums";
import { writeSheetRow } from "../sheets/page/writeSheetRow";
import { writeSheet } from "../sheets/page/writeSheet";
import { updateSheet } from "../sheets/page/updateSheet";
import { deleteSheetRow } from "../sheets/page/deleteSheet";
import { findSheetId } from "../sheets/tab/findSheetTabId";


let categoryCache: string[][];

export async function addCategoryType(
  spreadSheetId: string,
  categoryType: string,
  categorySubType: string,
  movement: string,
): Promise<void>{
  await writeSheet(  
    spreadSheetId,
    SHEET_TABS.BUDGET_PLANNING,
    [[categoryType, categorySubType, movement]],
  );
}

export async function updateCategoryTypes(
  spreadSheetId: string,
  oldCategoryType: string,
  oldCategorySubType: string,
  newCategoryType: string,
  newCategorySubType: string,
  movement: string,
): Promise<void>{
  const index = categoryCache.findIndex(
    ([type, subtype]) =>
      type === oldCategoryType && subtype === oldCategorySubType
  );
  await updateSheet(
    spreadSheetId,
    SHEET_TABS.BUDGET_PLANNING,
    `A${index + 1}:C${index + 1}`,
    [[newCategoryType, newCategorySubType, movement]],
  );
}

export async function deleteCategoryTypes(
  spreadSheetId: string,
  categoryType: string,
  categorySubType: string,
): Promise<void>{
  const index = categoryCache.findIndex(
  ([type, subtype]) =>
    type === categoryType && subtype === categorySubType
  );
  const sheetId = await findSheetId(spreadSheetId, SHEET_TABS.BUDGET_PLANNING);
  await deleteSheetRow(spreadSheetId, sheetId, index);
}

export async function getCategoryTypes(
  spreadSheetId: string,
): Promise<Category[]> {
  const values = await readSheet(spreadSheetId, SHEET_TABS.BUDGET_PLANNING);
  categoryCache = values;
  const map = new Map<string, Category>();

  for(const [type, subtype, movement] of values){
    if(!map.has(type)){
      map.set(type, {
        type,
        subtypes: [],
        movement: movement as CashMovementTypes
      });
    }
    const entry = map.get(type);

    if(entry && !entry.subtypes.includes(subtype)){
      entry.subtypes.push(subtype);
    }
  }
  return Array.from(map.values());
}