import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  // Опціонально: додайте логування, щоб бачити SQL-запити в консолі
  log: ["query", "info", "warn", "error"],
});
