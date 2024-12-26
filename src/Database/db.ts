import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Env } from "../env";

const createPrismaClient = (env: Env): PrismaClient => {
  // Check if prisma client is already instantiated in global context
  const globalPrisma = globalThis as { prisma?: PrismaClient };
  const existingPrismaClient = globalPrisma.prisma;

  if (existingPrismaClient) {
    return existingPrismaClient;
  }

  const prismaClient = new PrismaClient({
    datasourceUrl: env.DATABASE_URL,
    log: env.ENVIRONMENT === "development" ? ["query", "error", "warn"] : ["error"],
    errorFormat: "pretty",
  }).$extends(withAccelerate()) as unknown as PrismaClient;

  return prismaClient;
};

export const prisma = (env: Env) => createPrismaClient(env);
