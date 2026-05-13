import { initializeApp, getApps, cert, type App } from 'firebase-admin/app'
import { getDatabase, type Database } from 'firebase-admin/database'
import { getAuth, type Auth } from 'firebase-admin/auth'

function createFirebaseApp(): App {
    if (getApps().length > 0) {
        return getApps()[0]!;
    }

    return initializeApp({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID!,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
            privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
        }),
        databaseURL: process.env.FIREBASE_DATABASE_URL!,
    });
}

const app = createFirebaseApp()

export const db: Database = getDatabase(app)
export const auth: Auth = getAuth(app)

export const dbRef = (path: string) => db.ref(path);