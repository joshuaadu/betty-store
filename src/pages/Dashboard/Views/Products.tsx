import Button from "../../../components/UI/Button";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import styles from "../../../styles/Products.module.scss";
import ListSelector from "../../../components/UI/selectors/ListSelector";
import Table from "../../../components/Table";
import { useEffect, useState } from "react";

const DUMMY_LIST = ["List1", "Short List", "Very long list", "List4"];
const DUMMY_LIST2 = ["List1", "Short", "Very list", "List4"];

const Products = () => {
	const [products, setProducts] = useState();
	const [error, setError] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const response = await fetch("https://dummyjson.com/products");
			if (!response.ok) throw Error("Failed to fetch products data");

			const data = await response.json();
			console.log(data);
			setProducts(data);
			setError(null);
			setLoading(false);
		};

		try {
			fetchData();
		} catch (error: any) {
			setError(error.message);
			setLoading(false);
		}
	}, []);
	return (
		<>
			<h2>Products</h2>
			<header className={styles.header}>
				<Button className={styles["add-btn"]}>
					<AddCircleRoundedIcon />
					<span>NEW PRODUCT</span>
				</Button>
				<div className={styles.controls}>
					<ListSelector label="Sort by" list={DUMMY_LIST2} />
					<ListSelector label="Sort by" list={DUMMY_LIST} />
					<ListSelector label="Collection Type" list={DUMMY_LIST} />
				</div>
			</header>
			<section className={styles["product-list"]}>
				{isLoading && <p>Fetching products data</p>}
				{!isLoading && error && <p>{error}</p>}
				{products && (
					<Table
						keys={["Id", "Title", "Description", "Price", "Stock"]}
						data={products}
					/>
				)}
			</section>
		</>
	);
};

export default Products;
