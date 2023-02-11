import { collection, writeBatch, doc, getDocs } from '@firebase/firestore';
import { database } from '@shared/firebase/firebase-init';
import { ProductFull } from '@shared/types/common-types';

export const addProductsToStorage = async (collectionKey: string, documentKey: string, objectsToAdd: unknown[]) => {
  const collectionRef = collection(database, collectionKey);
  const batch = writeBatch(database);

  for (const object of objectsToAdd) {
    const docRef = doc(collectionRef, documentKey.toLowerCase());
    batch.set(docRef, object);
  }

  await batch.commit();
};

export const fetchProductsFromStorage = async (): Promise<ProductFull[]> => {
  const querySnapshot = await getDocs(collection(database, 'products'));
  const products: ProductFull[] = [];

  querySnapshot.forEach((x) => {
    const { items } = x.data();

    if (items?.length) {
      products.push(...items);
    }
  });

  return products;
};
