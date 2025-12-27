import { Category } from "../category/category.types";
import { CategorySubtype } from "../category/category_subtype.types";
import { Month } from "../common/month.enums";

export interface DailySummary {
    date: string;
    year: number;
    month: Month;
    day: number;
    category: Category;
    subtype: CategorySubtype;
    debit: number;
    credit: number;
    details: string;
    balance_after: number;
    effective_date: string;
}