import * as userService from "../services/user.service";

// GET USERS
export const getUsers = async (req: any, res: any) => {
  try {
    const users = await userService.getAllUsers();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Failed to fetch users"
    });
  }
};

// UPDATE ROLE
export const updateUserRole = async (req: any, res: any) => {
  try {
    const { role } = req.body;

    if (!role) {
      return res.status(400).json({
        success: false,
        message: "Role is required"
      });
    }

    const user = await userService.updateUserRole(
      req.params.id,
      role
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User role updated successfully",
      data: user
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "Failed to update role"
    });
  }
};

// UPDATE STATUS
export const updateUserStatus = async (req: any, res: any) => {
  try {
    const { isActive } = req.body;

    if (typeof isActive !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "isActive must be true or false"
      });
    }

    const user = await userService.updateUserStatus(
      req.params.id,
      isActive
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "User status updated successfully",
      data: user
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "Failed to update user status"
    });
  }
};