import type { Context, Next } from "hono";
import type { DecodedIdToken } from "firebase-admin/auth";
import { auth } from "../lib/firebase.js";
import type { UserRole } from "../../../../src/types/database.types.js";
import { success } from "zod";
import { error } from "node:console";
import { constrainedMemory } from "node:process";

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

    const token = parts[1]!;

    try {
        const decoded: DecodedIdToken = await auth.verifyIdToken(token);

        const role = (decoded["role"] as UserRole) ?? "HOSPITAL_STAFF";
        const hospitalId = decoded["hospitalId"] as string | undefined;
        const pharmacyId = decoded["pharmacyId"] as string | undefined;

        c.set("user", {
            uid: decoded.uid,
            email: decoded.email,
            role,
            hospitalId,
            pharmacyId,
        });

        await next();
    } catch (err) {
        const message =
            error instanceof Error ? error.message : "Token verification failed";

        return c.json(
            { success: false, error: "Unauthorized", detail: message },
            401
        );
    }
}

export function requireRole(...allowedRoles: UserRole[]) {
    return async (c: Context, next: Next): Promise<Response | void> => {
        const user = c.get("user") as AuthUser;

        if (!allowedRoles.includes(user.role)) {
            return c.json(
                {
                    success: false,
                    error: "Forbidden",
                    detail: `This action requires one of: ${allowedRoles.join(", ")}`,
                },
                403
            );
        }

        await next();
    };
}