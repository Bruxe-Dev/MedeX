import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { dbRef } from "../lib/firebase.js";
import { requireRole, type AppVariable } from "../middleware/auth.js";
import { AppError } from "../middleware/error.js";
import { UpdateInventorySchema } from "../schemas/inventory.schemas.js";
import type { InventoryRecord, InventoryStatus } from "../../../../src/types/database.types.js"; 