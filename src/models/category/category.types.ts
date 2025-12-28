import { CashMovementTypes } from "../common/money_movement.enums";

export interface Category {
  type: string;
  subtypes: string[];
  movement: CashMovementTypes;
}