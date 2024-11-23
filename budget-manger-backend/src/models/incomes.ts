// define basic types
type UUID = string;
type ISO8601DateTime = string;
type Currency = "USD" | "GHS";

// 2. Enums for better type safety
enum IncomeStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  FAILED = "failed",
  SCHEDULED = "scheduled",
}

enum IncomeFrequency {
  ONE_TIME = "one-time",
  DAILY = "daily",
  WEEKLY = "weekly",
  BI_WEEKLY = "bi-weekly",
  MONTHLY = "monthly",
  QUARTERLY = "quarterly",
  YEARLY = "yearly",
}

enum MainIncomeCategory {
  SALARY = "salary",
  INVESTMENT = "investment",
  FREELANCE = "freelance",
  BUSINESS = "business",
  RENTAL = "rental",
  PASSIVE = "passive",
  OTHER = "other",
}

const IncomeCategoryMap = {
  [MainIncomeCategory.SALARY]: [
    "full-time",
    "part-time",
    "bonus",
    "commission",
    "overtime",
  ],

  [MainIncomeCategory.INVESTMENT]: [
    "stocks",
    "bonds",
    "dividends",
    "crypto",
    "real-estate",
  ],
  [MainIncomeCategory.FREELANCE]: [
    "consulting",
    "writing",
    "design",
    "development",
    "teaching",
  ],
  [MainIncomeCategory.RENTAL]: [
    "residential",
    "commercial",
    "parking",
    "storage",
    "equipment",
  ],
  [MainIncomeCategory.PASSIVE]: [
    "royalties",
    "affiliate",
    "advertising",
    "licensing",
    "patents",
  ],
  [MainIncomeCategory.OTHER]: [
    "gifts",
    "inheritance",
    "grants",
    "refunds",
    "miscellaneous",
  ],
  [MainIncomeCategory.BUSINESS]: [
    "retail",
    "services",
    "products",
    "online",
    "wholesale",
  ],
};

export interface Income {
  readonly id: UUID;
  name: string;
  description?: string;
  amount: Currency;
  category: MainIncomeCategory;
  date: ISO8601DateTime;
  frequency?: IncomeFrequency;
  note?: string;
  attachments?: string[];
  tags?: string[];
  status: IncomeStatus;
}
