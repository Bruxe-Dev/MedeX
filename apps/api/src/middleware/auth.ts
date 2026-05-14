import type { Context, Next } from "hono";
import type { DecodedIdToken } from "firebase-admin/auth";
import { auth } from "../lib/firebase.js";
import type { UserRole } from "../../../../src/types/database.types.js";

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