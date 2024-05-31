import { DocumentData, DocumentReference, addDoc, collection, getDocs, query } from "firebase/firestore"
import { db } from "./config"
import { UserFormData } from "@/interfaces/user";
import { getEnvironments } from "@/environments";

const env = getEnvironments()
const collectionRef = collection(db, env.VITE_FIREBASE_ROOT_DB_PATH);

export const registerUserInfo = (data: UserFormData): Promise<DocumentReference<DocumentData, DocumentData>> => {
    return addDoc(collectionRef, data)
}

export const getUsersInfo = async () => {
    const queryRef = query(collectionRef)
    const docsSnapshot = await getDocs(queryRef)
    const usersInfo: Array<any> = []

    docsSnapshot.forEach((doc: any) => {
        usersInfo.push({ ...doc.data(), id: doc.id })
    })

    return usersInfo
}