// services/user.service.ts

import User from "../models/user.model";

export const getAllUsers = async () => {
  return User.find().select("-password");
};

export const updateUserRole = async (id: string, role: string) => {
  return User.findByIdAndUpdate(id, { role }, { new: true });
};

export const updateUserStatus = async (id: string, isActive: boolean) => {
  return User.findByIdAndUpdate(id, { isActive }, { new: true });
};