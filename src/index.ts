import { Hono } from "hono";
import { Env } from "./env";
import { prisma } from "./Database/db";

const app = new Hono<{ Bindings: Env }>();

app.get("/", async (c: Hono.Context) => {
  return c.json({
    message: "Hello World!",
  });
});

app.get("/user", async (c: Hono.Context) => {
  const env: Env = c.env;
  const db = prisma(env);
  const userData = await db.user.findMany();

  if (!userData) {
    return c.json({ message: "No user data found" });
  }

  return c.json({
    message: "user Data",
    user: userData,
  });
});

export default app;
