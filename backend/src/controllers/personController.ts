import { prisma } from "../connection/index";
import { Request, Response } from "express";

export default {
  getPerson: async (req: Request, res: Response): Promise<void> => {
    try {
      const persons = await prisma.person.findMany();
      res.send(persons);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving persons");
    }
  },
};
