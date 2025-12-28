import { CategoryTypes } from "../category/category.enums";
import { CategorySubtype } from "../category/category_subtype.types";
import { CashMovementTypes } from "../common/money_movement.enums";

export interface Budget_Detail {
  type: string,
  subtype: string,
  movement: CashMovementTypes;
}