import User from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (data: any) => {
  const exists = await User.findOne({ email: data.email });
  if (exists) throw new Error("Email already exists");

  const hash = await bcrypt.hash(data.password, 10);
  return User.create({ ...data, password: hash });
};

export const loginUser = async (data: any) => {
  const user = await User.findOne({ email: data.email }).select("+password");

  if (!user) throw new Error("User not found");

  if (!user.isActive) throw new Error("User is inactive");

  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) throw new Error("Invalid password");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" },
  );

  // ✅ remove password before returning
  const userObj = user.toObject();
  const { password, ...safeUser } = userObj;

  return {
    token,
    user: safeUser,
  };
};
