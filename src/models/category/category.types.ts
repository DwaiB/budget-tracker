import { CashMovementTypes } from "../common/money_movement.enums";
import { CategoryTypes } from "./category.enums";

export interface Category {
  name: string;
  type: CategoryTypes[];
  movement: CashMovementTypes;
}