
import { collection, addDoc, getFirestore } from "firebase/firestore";
import firebase_app from "../config";
import { Dayjs } from "dayjs";

const db = getFirestore(firebase_app);

interface childrenInterface {
    name: string,
    lastname: string,
    secondLastname: string,
    birthdate: Date | undefined,
    adrdress: {
        cp: string,
        state: string,
        municipality: string,
        colony: string,
        street: string,
        outNumber: string,
        inNumber: string,
    }
}

export default async function newStuden(student: childrenInterface) {

    try {
        const docRef = await addDoc(collection(db, "students"), student)
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}