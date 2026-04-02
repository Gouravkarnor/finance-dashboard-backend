export type Role = "admin" | "analyst" | "viewer";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: Role;
}