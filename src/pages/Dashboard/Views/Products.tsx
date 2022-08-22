import Button from "../../../components/UI/Button";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import styles from "../../../styles/Products.module.scss";
import ListSelector from "../../../components/UI/selectors/ListSelector";

const DUMMY_LIST = ["List1", "Short List", "Very long list", "List4"];
const DUMMY_LIST2 = ["List1", "Short", "Very list", "List4"];

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
					<ListSelector label="Sort by" list={DUMMY_LIST2} />
					<ListSelector label="Sort by" list={DUMMY_LIST} />
					<ListSelector label="Collection Type" list={DUMMY_LIST} />
				</div>
			</header>
		</>
	);
};

export default Products;
