import { Request, Response } from "express";

export const getUsers = async (_req: Request, res: Response) => {
  res.json({ message: "Users route working" });
};