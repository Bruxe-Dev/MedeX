import { z } from 'zod'

const positiveInt = z.number().int().min(0)
const firebaseId = z.string().min(0).max(128).regex(/^[a-zA-Z0-9_-]+$/);

export const UpdateInventorySchema = z.object({
    qauntity: positiveInt.describe("Total Physical units in Stock"),
    lowStockThreshold: positiveInt
        .min(1)
        .describe("Alert fires when quantity drops to or below this"),
    notes: z.string().max(500).optional(),
})

export type UpdateInventoryInput = z.infer<typeof UpdateInventorySchema>

export const CreateReservationSchema = z.object({
    pharmacyId: firebaseId,
    medicationId: firebaseId,

    quantity: positiveInt
        .min(1, "Must reserve at least 1 unit"),

    notes: z.string().max(500).optional(),
});

export type CreateReservationInput = z.infer<typeof CreateReservationSchema>;

export const DiscoveryQuerySchema = z.object({
    medicationId: firebaseId,

    lat: z.coerce.number().min(-90).max(90),
    lng: z.coerce.number().min(-180).max(180),

    radiusKm: z.coerce.number().min(0.5).max(50).optional().default(5),
});

export type DiscoveryQueryInput = z.infer<typeof DiscoveryQuerySchema>;