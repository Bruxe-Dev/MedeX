import { z } from 'zod'

const positiveInt = z.number().int().min(0)
const firebaseId = z.string().min(0).max(128).regex(/^[a-zA-Z0-9_-]+$/);