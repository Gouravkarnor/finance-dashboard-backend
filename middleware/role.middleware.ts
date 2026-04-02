export const allowRoles = (...roles: string[]) => {
  return (req: any, res: any, next: any) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ msg: "Forbidden you are not authorised to access" });
    }
    next();
  };
};