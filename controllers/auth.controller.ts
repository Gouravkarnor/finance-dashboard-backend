import * as authService from "../services/auth.service";

export const register = async (req: any, res: any) => {
  try {
    const user = await authService.registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "Registration failed",
    });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const { token, user } = await authService.loginUser(req.body);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (err: any) {
    res.status(401).json({
      success: false,
      message: err.message || "Login failed",
    });
  }
};
