import { ReactNode } from "react";

interface Props {
	children?: ReactNode;
	className?: string | undefined;
}
const Dropdown = ({ children, className, ...props }: Props) => {
	return <div className={className ? className : " "}>{children}</div>;
};

export default Dropdown;
