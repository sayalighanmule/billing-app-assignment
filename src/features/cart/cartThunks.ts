import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveBasketToFirestore, loadBasketFromFirestore } from "../../utils/firestoreBasket";

export const saveCart = createAsyncThunk(
  "cart/saveCart",
  async (items: Record<string, number>) => {
    await saveBasketToFirestore(items);
    return true;
  }
);

export const loadCart = createAsyncThunk(
  "cart/loadCart",
  async () => {
    const items = await loadBasketFromFirestore();
    return items;
  }
);
