import "../styles/globals.css";
import "@tremor/react/dist/esm/tremor.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="h-full">
			<head />
			<body className="h-full overflow-hidden text-pblack">{children}</body>
		</html>
	);
}
