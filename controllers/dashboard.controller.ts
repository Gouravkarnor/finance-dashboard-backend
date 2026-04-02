import * as dashboardService from "../services/dashboard.service";

export const getSummary = async (req: any, res: any) => {
  try {
    const data = await dashboardService.getSummary();

    res.status(200).json({
      success: true,
      message: "Dashboard data fetched successfully",
      data
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Failed to fetch dashboard data"
    });
  }
};