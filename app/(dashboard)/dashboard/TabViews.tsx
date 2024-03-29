"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Block, Card, ColGrid, Tab, TabList, Text, Title } from "@tremor/react";
import { getData } from "../../../utils/fetchData";
import useAuthStore from "../../../stores/useAuthStore";

export default function TabViews(props: any) {
	const [selectedView, setSelectedView] = useState(1);
	// const { data } = useQuery({
	// 	queryKey: ["data"],
	// 	queryFn: getData,
	// 	initialData: props?.data,
	// });
	// useAuthStore.setState({ user: data });
	console.log("Tab view", props?.data);

	return (
		<>
			<Title>Dashboard</Title>
			<Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
			<TabList
				defaultValue={1}
				onValueChange={(value) => setSelectedView(value)}
				marginTop="mt-6"
			>
				<Tab value={1} text="Overview" />
				<Tab value={2} text="Detail" />
			</TabList>

			{selectedView === 1 ? (
				<div className="h-full overflow-y-auto">
					<ColGrid
						numColsMd={2}
						numColsLg={3}
						gapX="gap-x-6"
						gapY="gap-y-6"
						marginTop="mt-6"
					>
						<Card>
							{/* Placeholder to set height */}
							<div className="h-28" />
						</Card>
						<Card>
							{/* Placeholder to set height */}
							<div className="h-28" />
						</Card>
						<Card>
							{/* Placeholder to set height */}
							<div className="h-28" />
						</Card>
					</ColGrid>

					<Block marginTop="mt-6">
						<Card>
							<div className="h-80" />
						</Card>
					</Block>
				</div>
			) : (
				<Block marginTop="mt-6">
					<Card>
						<div className="h-96" />
					</Card>
				</Block>
			)}
		</>
	);
}
