import Button from "../../../components/UI/Button";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import styles from "../../../styles/Products.module.scss";
import ListSelector from "../../../components/UI/selectors/ListSelector";

const Products = () => {
	return (
		<>
			<h2>Products</h2>
			<header className={styles.header}>
				<Button className={styles["add-btn"]}>
					<AddCircleRoundedIcon />
					<span>NEW PRODUCT</span>
				</Button>
				<div className={styles.controls}>
					<ListSelector label="Sort by" list={[]} />
					<ListSelector label="Sort by" list={[]} />
					<ListSelector label="Collection Type" list={[]} />
				</div>
			</header>
		</>
	);
};

export default Products;
