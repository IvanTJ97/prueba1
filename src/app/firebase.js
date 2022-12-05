import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
//Para evitar que no se pueda aceder, he aquí estos datos pero no deberían estar aquí por seguridad
//Esta bbdd es de prueba y no tiene ningún dato valioso
const firebaseConfig = {
    apiKey:"AIzaSyDZ4LarpDkTUKKXkyEm6ynVETHTP_1Z4YY",
    authDomain:'react-ex-5b5a8.firebaseapp.com',
    projectId:'react-ex-5b5a8',
    storageBucket:"react-ex-5b5a8.appspot.com",
};
const app=initializeApp(firebaseConfig);
export const db=getFirestore();
export default app;