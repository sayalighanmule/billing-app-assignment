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

  let savings = 0;

  const getPrice = (id: string) => products.find(p => p.id === id)!.price;

  const cheeseQty = items["cheese"] || 0;
  savings += Math.floor(cheeseQty / 2) * getPrice("cheese");

  const soupQty = items["soup"] || 0;
  const breadQty = items["bread"] || 0;
  const eligibleBread = Math.min(soupQty, breadQty);
  savings += eligibleBread * (getPrice("bread") / 2);

  const butterQty = items["butter"] || 0;
  savings += butterQty * (getPrice("butter") / 3);

  return savings;
};

export const selectTotal = (state: RootState) =>
  selectSubtotal(state) - selectSavings(state);
