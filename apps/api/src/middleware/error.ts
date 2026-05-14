import type { Context } from "hono";
import { ZodError } from "zod";

export class AppError extends Error {
    constructor(
        message: string,
        public statusCode: number = 500,
        public code: string = "INTERNAL_ERROR"
    ) {
        super(message);
        this.name = "AppError";
    }
}

export function errorHandler(error: Error, c: Context): Response {
    if (error instanceof ZodError) {
        return c.json(
            {
                success: false,
                error: "Validation failed",
                fields: Object.fromEntries(
                    error.issues.map((e) => [e.path.join("."), e.message])
                ),
            },
            400
        );
    }
    if (error instanceof AppError) {
        return c.json(
            {
                success: false,
                error: error.message,
                code: error.code,
            },
            error.statusCode as any
        );
    }

    console.error("[MedeX Unhandled Error]", {
        message: error.message,
        stack: error.stack,
        path: c.req.path,
        method: c.req.method,
    });

    return c.json(
        {
            success: false,
            error: "An internal server error occurred",
            code: "INTERNAL_ERROR",
        },
        500
    );
}