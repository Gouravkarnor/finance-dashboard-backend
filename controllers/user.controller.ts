import * as userService from "../services/user.service";

export const getUsers = async (req: any, res: any) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (err: any) {
    res.status(500).json({
      message: err.message || "Failed to fetch users"
    });
  }
};

export const updateUserRole = async (req: any, res: any) => {
  try {
    const { role } = req.body;

    if (!role) {
      return res.status(400).json({ message: "Role is required" });
    }

    const user = await userService.updateUserRole(
      req.params.id,
      role
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (err: any) {
    res.status(400).json({
      message: err.message || "Failed to update role"
    });
  }
};

export const updateUserStatus = async (req: any, res: any) => {
  try {
    const { isActive } = req.body;

    if (typeof isActive !== "boolean") {
      return res.status(400).json({
        message: "isActive must be true or false"
      });
    }

    const user = await userService.updateUserStatus(
      req.params.id,
      isActive
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (err: any) {
    res.status(400).json({
      message: err.message || "Failed to update user status"
    });
  }
};