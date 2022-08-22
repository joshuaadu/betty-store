import { forwardRef, memo, ReactNode } from "react";

interface Props {
	children?: ReactNode;
	className?: string | undefined;
	list: string[];
	select: (value: string) => void;
}

const Dropdown = ({ children, className, list, select, ...props }: Props) => {
	return (
		<div className={className ? className : " "} data-dropdown-menu>
			<ul>
				{list.map((item, index) => (
					<li key={index} data-dropdown-list onClick={() => select(item)}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};
export default Dropdown;
