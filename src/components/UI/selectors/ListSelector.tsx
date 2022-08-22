import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useRef, useState } from "react";

import styles from "../../../styles/Selectors.module.scss";
import Dropdown from "../Dropdown";
interface Props {
	label: string;
	list: string[];
}
const ListSelector = ({ label, list }: Props) => {
	const [openDropdown, setOpenDropdown] = useState(false);
	const selectRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const eventHandler = (event: Event) => {
			if (
				selectRef.current &&
				!selectRef.current?.contains(event.target as HTMLElement)
			) {
				setOpenDropdown(false);
				console.log("Close");
			}
		};
		document.body.addEventListener("click", eventHandler);

		return () => {
			document.body.removeEventListener("click", eventHandler);
		};
	}, []);

	const toggleHandler = () => {
		setOpenDropdown((prev) => !prev);
	};

	const selectHandler = (value: string) => {
		// set selected option

		setOpenDropdown(false);
	};
	return (
		<div className={styles.selector}>
			<div className={styles.header} ref={selectRef}>
				<span>{label}</span>
				<KeyboardArrowDownIcon onClick={toggleHandler} />
			</div>
			{openDropdown && (
				<Dropdown
					className={styles.dropdown}
					select={selectHandler}
					list={list}
				/>
			)}
		</div>
	);
};

export default ListSelector;
