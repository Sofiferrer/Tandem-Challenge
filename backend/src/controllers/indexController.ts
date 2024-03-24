import { Request, Response } from "express";

export default {
  index: async (req: Request, res: Response): Promise<void> => {
    res.status(200).json("WELCOME TO API TEST-TANDEM");
  },
};
