import * as dashboardService from "../services/dashboard.service";

export const getSummary = async (req: any, res: any) => {
  try {
    const data = await dashboardService.getSummary();
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({
      message: err.message || "Failed to fetch dashboard data"
    });
  }
};