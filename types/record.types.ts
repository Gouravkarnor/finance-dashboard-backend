export interface IRecord {
  amount: number;
  type: "income" | "expense";
  category: string;
  date: Date;
  notes?: string;
}