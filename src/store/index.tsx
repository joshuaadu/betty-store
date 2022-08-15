import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./product-slice";
import salesReducer from "./sales-slice";

const store = configureStore({
	reducer: {
		products: productsReducer,
		sales: salesReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
