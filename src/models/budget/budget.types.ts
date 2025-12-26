import { Month } from "../common/month.enums";

export interface BudgetDetails{
  month: Month;
  year: number;
  allocated_amount: number;
  spent_amount: number;
  remaining_amount: number;
}