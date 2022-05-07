import styles from "./SingleUnitSummary.module.scss";
const SingleUnitSummary = ({ icon, color, label, value }) => {
	return (
		<div className={styles.card}>
			<div className={styles.icon} style={{ backgroundColor: `${color}` }}>
				{icon}
			</div>
			<div className={styles.details}>
				<span className={styles.value}>`${value}`</span>
				<span className={styles.label}>`${label}`</span>
			</div>
		</div>
	);
};

export default SingleUnitSummary;
