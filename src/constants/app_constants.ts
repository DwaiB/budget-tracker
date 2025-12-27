export const SHEET_TABS = {
  BUDGET_TRACKER: "Budget_Tracker",
  BUDGET_PLANNING: "Budget_Planning",
  BUDGET_PLANNING_INCOME: "Incomes_Planning",
  BUDGET_PLANNING_EXPENSES: "Expenses_Planning",
  BUDGET_PLANNING_SAVINGS: "Savings_Planning",
  BUDGET_TRACKING: "Budget_Tracking",
  CALCULATIONS: "Calculations",
  DROPDOWN_DATA: "Dropdown_Data",
  SETTINGS: "Settings",
} as const

export const APP_CONSTANTS = {
  BACKUP_SHEET_NAME: "Budget Sheet Backup",
}

export const DATE_FORMAT = "MM/DD/YYYY";

export const SHEET_RANGES = {
  BUDGET_PLANNING: {
    HEADER_ROW: "A1:Z1",
    DATA_RANGE: "A:Z",
  },
  BUDGET_TRACKING: {
    HEADER_ROW: "A1:Z1",
    DATA_RANGE: "A:Z",
  },
}