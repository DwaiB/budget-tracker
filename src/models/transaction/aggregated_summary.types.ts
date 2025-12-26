import { Month } from "../common/month.enums";

export interface AggregatedSummary {
  year: number;
  month: Month;
  date: string;
  total_debit: number;
  total_credit: number;
  net_balance: number;
}