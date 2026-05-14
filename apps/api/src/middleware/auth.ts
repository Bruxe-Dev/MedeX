import type { Context, Next } from "hono";
import type { DecodedIdToken } from "firebase-admin/auth";
import { auth } from "../lib/firebase.js";
import type { UserRole } from "../../../../src/types/database.types.js";
import { success } from "zod";
import { error } from "node:console";

export type AuthUser = {
    uid: string;
    email: string | undefined;
    role: UserRole;
    hospitalId?: string;
    pharmacyId?: string;
}

export type AppVariable = {
    user: AuthUser;
};

export async function authMiddleware(c: Context, next: Next): Promise<Response | void> {
    const authHeader = c.req.header('Authorization');

    if (!authHeader) {
        return c.json({
            success: false, error: "Missing Authorization header"
        }, 401)
    }

    const parts = authHeader.split(" ")
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return c.json({
            success: false, error: "Invalid Token. Expected Bearer <token>"
        }, 401)
    }

    const token = parts[1];

    try {
        const decoded: DecodedIdToken = await auth.verifyIdToken(token);
    } catch (err) {

    }
}