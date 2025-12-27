import { CategoryTypes } from "../category/category.enums";
import { Category } from "../category/category.types";
import { CategorySubtype } from "../category/category_subtype.types";
import { Month } from "../common/month.enums";
import { BudgetPlan } from "./budget.plan";

export interface BudgetDetails{
  month: Month;
  year: number;
  plan: BudgetPlan;
  allocated_amount: number;
  spent_amount: number;
  remaining_amount: number;
}