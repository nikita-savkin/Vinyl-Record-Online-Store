import { onAuthStateChanged, signOut, NextOrObserver, User } from 'firebase/auth';
import { auth } from '@shared/firebase/firebase-init';

export const userSignOut = async () => signOut(auth);
export const authStateChanged = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);
