import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";

interface ProductState {
  list: Product[];
}

const initialState: ProductState = {
  list: [
    { id: "bread", name: "The Health Factory Whole Wheat Bread", price: 50, image:"/images/bread.jpg", description: "Power of Wheat | High Pibre | No Preservatives | 200 gm" },
    { id: "milk", name: "Amul Gold Pasturised Full Cream Milk", price: 34, image:"images/milk.jpg", description: "500 ml" },
    { id: "cheese", name: "Amul Cheese Cubes", price: 650, image:"images/chees.jpg", description: "1 kg" },
    { id: "soup", name: "Manchow Veg Cup-A-Soup | Knorr India", price: 30, image:"images/soup.jpg", description: "Manchow Veg with 100% Vegetables | 250 ml" },
    { id: "butter", name: "White Butter", price: 180, image:"images/butter.jpg", description: "200 gm" },
  ]
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}
});

export default productsSlice.reducer;
