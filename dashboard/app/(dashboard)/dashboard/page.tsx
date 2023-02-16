"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { useState } from "react";
import { Block, Card, ColGrid, Tab, TabList, Text, Title } from "@tremor/react";
import SearchBar from "../../../components/UI/SearchBar";

export default function DashboardHome() {
	const [selectedView, setSelectedView] = useState(1);
	return (
		<main className="w-full h-full overflow-hidden">
			{/* <div className="hidden lg:flex w-full pr-6">
				<SearchBar />
			</div> */}
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
		</main>
	);
}
