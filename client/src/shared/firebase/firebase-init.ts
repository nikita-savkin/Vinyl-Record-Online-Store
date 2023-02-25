import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '@shared/firebase/firebase-config';
import { getStorage } from 'firebase/storage';

initializeApp(firebaseConfig);

const auth = getAuth();
const database = getFirestore();
const firebaseStorage = getStorage();

export { auth, database, firebaseStorage };
