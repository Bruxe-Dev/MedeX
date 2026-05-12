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

export interface Pharmacy {
    id: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    geohash: string;
    phone: string;
    email: string;
    licenseNumber: string;
    isActive: boolean;
    createdAt: number;
    updatedAt: number;
}