import { selectSubtotal, selectSavings, selectTotal } from "../features/cart/cartSelectors";

const mockState = (items: Record<string, number>) => ({
  cart: { items },
  products: {
    list: [
      { id: "bread", name: "Bread", price: 1.10, image:"./Images/bread.jpg" ,description: "" },
      { id: "milk", name: "Milk", price: 0.50, image:"Images/bread.jpg" ,description: "" },
      { id: "cheese", name: "Cheese", price: 0.90, image:"Images/bread.jpg" ,description: "" },
      { id: "soup", name: "Soup", price: 0.60, image:"Images/bread.jpg" ,description: "" },
      { id: "butter", name: "Butter", price: 1.20, image:"Images/bread.jpg" ,description: "" }
    ]
  }
});

describe("cart selectors", () => {
  it("calculates subtotal", () => {
    const state = mockState({ bread: 2, milk: 1 });
    expect(selectSubtotal(state)).toBeCloseTo(1.10*2 + 0.50);
  });

  it("applies cheese BOGOF offer", () => {
    const state = mockState({ cheese: 2 });
    expect(selectSavings(state)).toBeCloseTo(0.90);
  });

  it("applies soup → bread 50% offer", () => {
    const state = mockState({ soup: 1, bread: 1 });
    expect(selectSavings(state)).toBeCloseTo(1.10 / 2);
  });

  it("applies butter 1/3 off", () => {
    const state = mockState({ butter: 3 });
    expect(selectSavings(state)).toBeCloseTo((1.20/3)*3);
  });

  it("calculates total correctly", () => {
    const state = mockState({ bread: 2, cheese: 2 });
    const subtotal = selectSubtotal(state);
    const savings = selectSavings(state);
    expect(selectTotal(state)).toBeCloseTo(subtotal - savings);
  });
});
