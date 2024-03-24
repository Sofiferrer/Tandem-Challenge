import { PrismaClient } from "@prisma/client";

// Instancia de Prisma con Soft Deletion
export const prisma: PrismaClient = new PrismaClient({
  errorFormat: "minimal",
  log: ["error"],
});
