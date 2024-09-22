import { Hono } from "hono";

import rootRoute from "./routes/root";

const app = new Hono();

app.route("/", rootRoute);

export default app;
