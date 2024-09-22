import { Hono } from "hono";

const rootRoute = new Hono();

rootRoute.get("/", (c) => {
  return c.json({ message: "Hello Hono!" });
});

export default rootRoute;
