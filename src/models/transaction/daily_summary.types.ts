import { Category } from "../category/category.types";
import { CategorySubtype } from "../category/category_subtype.types";

export interface DailySummary {
    date: string;
    year: number;
    month: number;
    day: number;
    category: Category;
    subtype: CategorySubtype | null;
    debit: number;
    credit: number;
    details: string;
    balance_after: number;
    effective_date: string;
}