import classes from "./Button.module.css";
const Button = (props) => {
  const { children, active, alternate, type, color, backgroundColor } = props;

  return (
    <button
      style={color && backgroundColor ? { color, backgroundColor } : {}}
      type={type ? type : "button"}
      className={`${classes.btn} ${active ? classes.active : ""} ${
        alternate ? classes.active : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
