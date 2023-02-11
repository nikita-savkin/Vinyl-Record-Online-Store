import { onAuthStateChanged, signOut, NextOrObserver, User } from 'firebase/auth';
import { auth } from '@shared/firebase/firebase-init';

export const userSignOut = async () => signOut(auth);
export const authStateChanged = async (callback: NextOrObserver<User>) => await onAuthStateChanged(auth, callback);
