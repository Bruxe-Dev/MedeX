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

export interface Medication {
    id: string;
    name: string;
    genericName: string;
    category: string;
    dosage: string;
    unit: string;
    requiresPrescription: boolean;
    description?: string;
    createdAt: number;
}

export interface InventoryRecord {
    pharmacyId: string;
    medicationId: string;
    quantity: number;
    reserved: number;
    lowStockThreshold: number;
    status: InventoryStatus;
    lastUpdatedAt: number;
    lastUpdatedBy: string;
}

export interface Reservation {
    id: string;
    pharmacyId: string;
    medicationId: string;
    hospitalId: string;
    requestedBy: string;
    quantity: number;
    status: ReservationStatus;
    createdAt: number;
    expiresAt: number;
    confirmedAt?: number;
    fulfilledAt?: number;
    notes?: string;
}
