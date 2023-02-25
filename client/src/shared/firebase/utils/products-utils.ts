import {
  collection,
  query,
  writeBatch,
  doc,
  getDocs,
  getDoc,
  limit,
  startAfter,
  endBefore,
  limitToLast,
} from '@firebase/firestore';
import { database } from '@shared/firebase/firebase-init';
import { ProductFull } from '@shared/types/common-types';

export const addProductsToStorage = async (collectionId: string, objectsToAdd: any) => {
  const collectionRef = collection(database, collectionId);
  const batch = writeBatch(database);

  for (const object of objectsToAdd) {
    const docRef = doc(collectionRef);
    batch.set(docRef, object);
  }

  await batch.commit();
};

interface ProductsFromStorageType {
  products: ProductFull[];
  firstVisibleId: string | null;
  lastVisibleId: string | null;
}

export const fetchProductsFromStorage = async (
  directionType: string,
  prevFirstVisibleId: string | null,
  prevLastVisibleId: string | null,
): Promise<ProductsFromStorageType> => {
  let products: ProductFull[] = [];
  const collectionRef = collection(database, 'music');
  const productsLimit = 9;
  let querySnapshot = null;
  let lastVisibleId;
  let firstVisibleId;

  const queryConstraints = [limit(productsLimit)];

  const getDocSnap = async (prevSnapshotId: string) => {
    const docRef = doc(database, 'music', prevSnapshotId);
    return await getDoc(docRef);
  };

  if (prevLastVisibleId !== null && prevFirstVisibleId !== null) {
    if (directionType === 'next') {
      const docSnap = await getDocSnap(prevLastVisibleId);
      const next = query(collectionRef, startAfter(docSnap), limit(productsLimit));

      querySnapshot = await getDocs(next);
    } else if (directionType === 'prev') {
      const docSnap = await getDocSnap(prevFirstVisibleId);
      const prev = query(collectionRef, endBefore(docSnap), limitToLast(productsLimit));

      querySnapshot = await getDocs(prev);
    }
  } else {
    const first = query(collectionRef, ...queryConstraints);
    querySnapshot = await getDocs(first);
  }

  firstVisibleId = querySnapshot?.docs[0]?.id ?? null;
  lastVisibleId = querySnapshot?.docs[querySnapshot?.docs.length - 1]?.id ?? null;

  return { products, firstVisibleId, lastVisibleId };
};
