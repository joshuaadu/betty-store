import classes from "./Logo.module.css";
const Logo = (props) => {
  return (
    <div className={classes.logo}>
      <span className={classes.part1}>Betty</span>
      <span className={classes.part2}>Store</span>
    </div>
  );
};

export default Logo;
