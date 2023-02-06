import { User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { database } from '@shared/firebase/firebase-init';

export const createUserDoc = async (userAuth: User, additionalUserInfo?: object) => {
  const userDocRef = doc(database, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    return await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalUserInfo,
    });
  }
};
