import { Month } from "../common/month.enums";
import { Budget_Detail } from "./budget_details.types";

export interface Budget_Tracker{
  month: Month;
  year: number;
  plan: Budget_Detail;
  reccuring: boolean;
  allocated_amount: number;
  spent_amount: number;
  remaining_amount: number;
}