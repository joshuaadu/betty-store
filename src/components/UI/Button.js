import classes from "./Button.module.css";
const Button = (props) => {
  const { children, active } = props;
  return (
    <button className={`${classes.btn} ${active ? classes.active : ""}`}>
      {children}
    </button>
  );
};

export default Button;
