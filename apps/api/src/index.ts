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