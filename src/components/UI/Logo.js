import classes from "./Logo.module.css";
const Logo = (props) => {
	const { add } = props;
	return (
		<header className={classes.logo}>
			<span className={classes.part1}>Betty</span>
			<span className={classes.part2}>Store</span>
			{add && <span>{` ${add}`}</span>}
		</header>
	);
};

export default Logo;
