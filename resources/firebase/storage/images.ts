import { getStorage, ref, uploadBytes } from "firebase/storage";
import firebase_app from "../config";
import { useId } from "react";

const storage = getStorage(firebase_app);


function dataURLtoFile(dataurl:any, filename:any) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[arr.length - 1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}

export default async function uploadImage64(image: string){

    const storageRef = ref(storage, `images/${useId()}.jpg`);

    try {
        const refImage = await uploadBytes(storageRef, dataURLtoFile(image, 'image.jpg'));
        console.log(refImage);
        
    } catch (error) {
        console.log('error al subir la imagen', error );
        
    }
}