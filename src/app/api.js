import {db} from './firebase';
import {collection,getDocs,query,doc,addDoc,deleteDoc} from 'firebase/firestore';
const collectionName='PRUEBA';
const itemsCollection=collection(db,collectionName);
export const createConversion=async(obj)=>{
    const a=await addDoc(itemsCollection,obj);
    return a.id;
};
export const getConversions=async()=>{
    const result=await getDocs(query(itemsCollection));
    return result.docs.map(doc=>{
        return {...doc.data(),id:doc.id};
    }
    );
};
export const deleteConversionById=async(id)=>{
    await deleteDoc(doc(db,collectionName,id));
};