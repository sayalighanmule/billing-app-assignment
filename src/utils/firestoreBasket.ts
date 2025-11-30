import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const BASKET_DOC = "basket/current";

export const saveBasketToFirestore = async (items: Record<string, number>) => {
  await setDoc(doc(db, BASKET_DOC), { items });
};

export const loadBasketFromFirestore = async (): Promise<Record<string, number>> => {
  const snapshot = await getDoc(doc(db, BASKET_DOC));
  if (snapshot.exists()) return snapshot.data().items;
  return {};
};
