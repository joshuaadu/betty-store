import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	recordList: [],
	totalSales: 1000,
	revenue: 120000,
};
const salesSice = createSlice({
	name: "sales",
	initialState,
	reducers: {
		addSale(state, action) {},
		editSale(state, action) {},
	},
});

export const salesActions = salesSice.actions;

export default salesSice.reducer;
