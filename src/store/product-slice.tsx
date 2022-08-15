import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	productsItems: [],
	sold: 2050,
	currentStock: 10000,
};
const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		loadProducts(state, action) {
			state.productsItems = action.payload.items || [];
		},

		addNewProduct(state, action) {},

		removeProduct(state, action) {},

		updateProduct(state, action) {},
	},
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
