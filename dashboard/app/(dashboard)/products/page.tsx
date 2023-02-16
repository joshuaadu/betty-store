import React from "react";
import NativeAccordion from "../../../components/NativeAccordion";
import NativeDialog from "../../../components/NativeDialog";

export default function ProductsPage() {
	return (
		<div>
			<section>
				<NativeDialog />
			</section>
			<NativeAccordion />
		</div>
	);
}
