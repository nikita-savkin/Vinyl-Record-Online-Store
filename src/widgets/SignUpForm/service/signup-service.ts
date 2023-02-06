import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from '@shared/firebase/firebase-init';
import { createUserDoc } from '@shared/firebase/utils/create-user-doc';

const createAuthUserWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export { createUserDoc, createAuthUserWithEmailAndPassword };
