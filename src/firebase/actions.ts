import { DocumentData, DocumentReference, addDoc, collection, query } from "firebase/firestore"
import { db } from "./config"
import { UserFormData } from "@/interfaces/user";
import { getEnvironments } from "@/environments";

const env = getEnvironments()
export const collectionRef = collection(db, env.VITE_FIREBASE_ROOT_DB_PATH);
export const queryRef = query(collectionRef)

export const registerUserInfo = (data: UserFormData): Promise<DocumentReference<DocumentData, DocumentData>> => {
    return addDoc(collectionRef, data)
}