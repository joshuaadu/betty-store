// "use client";

import useAuthStore from "../stores/useAuthStore";
import { getData } from "../utils/fetchData";
export default async function IndexPage() {
	const initialData = await getData();
	useAuthStore.setState({ isAuthenticated: true, user: initialData });
	console.log("Root page", useAuthStore.getState().user);

	return <h1>{JSON.stringify("initialData")}</h1>;
}
