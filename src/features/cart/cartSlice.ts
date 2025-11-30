import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadCart } from "./cartThunks";

interface CartState {
  items: Record<string, number>;
}

const initialState: CartState = { items: {} };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.items[id] = (state.items[id] || 0) + 1;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (!state.items[id]) return;
      if (state.items[id] === 1) delete state.items[id];
      else state.items[id]--;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadCart.fulfilled, (state, action) => {
      state.items = action.payload || {};
    });
  }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
