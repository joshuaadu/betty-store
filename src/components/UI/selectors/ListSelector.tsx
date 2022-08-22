import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

import styles from "../../../styles/Selectors.module.scss";
import Dropdown from "../Dropdown";
interface Props {
	label: string;
	list: string[];
}
const ListSelector = ({ label, list }: Props) => {
	const [openDropdown, setOpenDropdown] = useState(false);

	const toggleHandler = () => {
		setOpenDropdown((prev) => !prev);
	};
	return (
		<div className={styles.selector}>
			<div className={styles.header}>
				<span>{label}</span>
				<KeyboardArrowDownIcon onClick={toggleHandler} />
			</div>
			{openDropdown && (
				<Dropdown className={styles.dropdown}>
					<ul>
						{list.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</Dropdown>
			)}
		</div>
	);
};

export default ListSelector;
