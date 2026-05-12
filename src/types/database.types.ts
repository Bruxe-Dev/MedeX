export type InventoryStatus =
    | "AVAILABLE"
    | "LOWSTOCK"
    | "OUT_OF_STOCK"
    | "RESERVED"

export type ReservationStatus =
    | "PENDING"
    | "CONFIRMED"
    | "FULFILLED"
    | "EXPIRED"
    | "CANCELLED";

export type UserRole =
    "HOSPITAL_STAFF"
    | "PHARMACY_STAFF"
    | "ADMIN"