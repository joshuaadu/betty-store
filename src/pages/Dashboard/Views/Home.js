import styles from "./Home.module.scss";
const Home = (props) => {
	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<h2>Dashboard</h2>
			</div>
		</section>
	);
};

export default Home;
