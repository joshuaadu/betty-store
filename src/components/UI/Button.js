import classes from "./Button.module.css";
const Button = (props) => {
	const { children, active, alternate, type, style, className } = props;

	return (
		<button
			style={{ ...style }}
			type={type ? type : "button"}
			className={`${classes.btn} ${className ? className : ""} ${
				active ? classes.active : ""
			} ${alternate ? classes.active : ""}`}
		>
			{children}
		</button>
	);
};

export default Button;
