import { RootState } from "../../app/store";

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectProducts = (state: RootState) => state.products.list;

export const selectSubtotal = (state: RootState): number => {
  const items = selectCartItems(state);
  const products = selectProducts(state);

  return Object.entries(items).reduce((sum, [id, qty]) => {
    const product = products.find(p => p.id === id)!;
    return sum + product.price * qty;
  }, 0);
};

export const selectSavings = (state: RootState): number => {
  const items = selectCartItems(state);
  const products = selectProducts(state);

  const DISCOUNTS: Record<string, number> = {
    bread: 0.10,   // 10%
    milk: 0.04,    // 4%
    cheese: 0.15,  // 15% 
    butter: 0.05,  // 5%
    soup: 0.10    // 10%
  };


  let savings = 0;

  for (const product of products) {
    const qty = items[product.id] || 0;
    const discount = DISCOUNTS[product.id] || 0;

    savings += qty * product.price * discount;
  }

  return savings;
};

export const selectTotal = (state: RootState) =>
  selectSubtotal(state) - selectSavings(state);
