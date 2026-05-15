import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { serve } from "@hono/node-server";

import { authMiddleware, type AppVariable } from "./middleware/auth.js";
import { errorHandler } from "./middleware/error.js";

import { inventoryRouter } from "./routes/inventory.js";
import { reservationsRouter } from "./routes/reservations.js";
import { discoveryRouter } from "./routes/discovery.js";
import { pharmaciesRouter } from "./routes/pharmacies.js";

const app = new Hono<{ Variables: AppVariable }>
app.use("*", logger())

app.use("*", cors({
    origin: process.env.ALLOWED_ORIGINS?.split(",") ?? ["http://localhost:3000"],
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
}));

app.get("/health", (c) => c.json({ status: "ok", timestamp: Date.now() }));

const api = new Hono<{ Variables: AppVariable }>();
api.use("*", authMiddleware);

api.route("/inventory", inventoryRouter);
api.route("/reservations", reservationsRouter);
api.route("/discovery", discoveryRouter);
api.route("/pharmacies", pharmaciesRouter);

app.route("/api", api);

app.onError(errorHandler);

app.notFound((c) =>
    c.json({ success: false, error: "Route not found" }, 404)
);

const PORT = Number(process.env.PORT ?? 3001);

serve({ fetch: app.fetch, port: PORT }, () => {
    console.log(`[MedeX API] Running on http://localhost:${PORT}`);
});

export default app;