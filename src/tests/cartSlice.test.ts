import cartReducer, { addItem, removeItem } from "../features/cart/cartSlice";

describe("cartSlice reducer", () => {
  it("should add an item", () => {
    const state = { items: {} };
    const result = cartReducer(state, addItem("bread"));
    expect(result.items["bread"]).toBe(1);
  });

  it("should increment quantity", () => {
    const state = { items: { bread: 1 } };
    const result = cartReducer(state, addItem("bread"));
    expect(result.items["bread"]).toBe(2);
  });

  it("should remove an item", () => {
    const state = { items: { bread: 2 } };
    const result = cartReducer(state, removeItem("bread"));
    expect(result.items["bread"]).toBe(1);
  });

  it("should delete item when quantity becomes zero", () => {
    const state = { items: { bread: 1 } };
    const result = cartReducer(state, removeItem("bread"));
    expect(result.items["bread"]).toBeUndefined();
  });
});
