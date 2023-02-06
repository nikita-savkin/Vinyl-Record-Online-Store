import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, UserCredential } from 'firebase/auth';
import { auth } from '@shared/firebase/firebase-init';

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

const signInWithGooglePopup = (): Promise<UserCredential> => signInWithPopup(auth, googleProvider);
const signInWithEmail = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

export { signInWithGooglePopup, signInWithEmail };
