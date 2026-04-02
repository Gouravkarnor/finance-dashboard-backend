import * as authService from "../services/auth.service";

export const register = async (req: any, res: any) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({
      message: err.message || "Registration failed"
    });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const token = await authService.loginUser(req.body);
    res.status(200).json({ token });
  } catch (err: any) {
    res.status(401).json({
      message: err.message || "Login failed"
    });
  }
};