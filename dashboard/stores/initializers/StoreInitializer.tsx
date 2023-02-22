"use client";

import { useRef } from "react";
import useAuthStore from "../useAuthStore";

function StoreInitializer({ name, price }: { name: string; price: number }) {
	const initialized = useRef(false);

	if (!initialized.current) {
		// useAuthStore.setState({ name, price });
		initialized.current = true;
	}
	return null;
}

export default StoreInitializer;
