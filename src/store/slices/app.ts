import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../../types/products";
import { Farmer } from "../../types/farmers";

interface AppState {
  product: Product | null;
  farmer: Farmer | null;
}

const initialState: AppState = {
  product: null,
  farmer: null,
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product | null>) => {
      state.product = action.payload;
    },
    setFarmer: (state, action: PayloadAction<Farmer | null>) => {
      state.farmer = action.payload;
    },
  },
});

export const { setProduct, setFarmer } = appSlice.actions;
export const selectCurrentProduct = (state: RootState) => state.app.product;
export const selectCurrentFarmer = (state: RootState) => state.app.farmer;
export default appSlice.reducer;
