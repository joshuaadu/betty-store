import styles from "./SummaryWidget.module.scss";

const colorStyles = {
	1: {
		backgroundColor: "rgb(128, 0, 128, 0.2)",
		color: "rgb(128, 0, 128)",
	},
	2: {
		backgroundColor: "rgb(255, 0, 0, 0.2)",
		color: "rgb(255, 0, 0)",
	},
	3: {
		backgroundColor: "rgb(0, 128, 0, 0.2)",
		color: "rgb(0, 128, 0)",
	},
	4: {
		backgroundColor: "rgb(0, 0, 255, 0.2)",
		color: "rgb(0, 0, 255)",
	},
};

const SummaryWidget = ({ icon, color, label, value, isCurrency }) => {
	if (isCurrency) {
		value = new Intl.NumberFormat("en-gb", {
			style: "currency",
			currency: "GHS",
		}).format(value);
	}
	return (
		<div className={styles.card}>
			<div
				className={styles.icon}
				style={color ? colorStyles[color] : colorStyles[1]}
			>
				{icon}
			</div>
			<div className={styles.details}>
				<span className={styles.value}>{value}</span>
				<span className={styles.label}>{label}</span>
			</div>
		</div>
	);
};

export default SummaryWidget;
