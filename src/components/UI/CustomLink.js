import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Button from "./Button";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link style={{ textDecoration: "none" }} to={to} {...props}>
        <Button active={match}>{children}</Button>
      </Link>
    </div>
  );
};

export default CustomLink;
