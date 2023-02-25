import { ref, getDownloadURL } from 'firebase/storage';
import { firebaseStorage } from '@shared/firebase/firebase-init';

export const getStorageFileUrl = async (location: string) => {
  return await getDownloadURL(ref(firebaseStorage, location));
};
