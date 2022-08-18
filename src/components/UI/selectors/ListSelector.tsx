import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styles from "../../../styles/Selectors.module.scss";
interface Props {
	label: string;
	list: string[];
}
const ListSelector = ({ label, list }: Props) => {
	return (
		<div className={styles.selector}>
			<div className={styles.header}>
				<span>{label}</span>
				<KeyboardArrowDownIcon />
			</div>
		</div>
	);
};

export default ListSelector;
