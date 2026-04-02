import Record from "../models/record.model";

export const getSummary = async () => {
  const records = await Record.find();

  let income = 0, expense = 0;
  const categoryMap: any = {};
  const monthlyMap: any = {};

  records.forEach((r: any) => {
    // totals
    if (r.type === "income") income += r.amount;
    else expense += r.amount;

    // category breakdown
    if (!categoryMap[r.category]) {
      categoryMap[r.category] = 0;
    }
    categoryMap[r.category] += r.amount;

    // monthly trends
    const month = new Date(r.date).toISOString().slice(0, 7);
    if (!monthlyMap[month]) {
      monthlyMap[month] = 0;
    }
    monthlyMap[month] += r.amount;
  });

  const recent = await Record.find()
    .sort({ createdAt: -1 })
    .limit(5);

  return {
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense,
    categoryBreakdown: categoryMap,
    monthlyTrends: monthlyMap,
    recentTransactions: recent
  };
};