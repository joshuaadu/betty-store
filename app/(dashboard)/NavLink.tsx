"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";

interface navLinkProps {
	icon: JSX.Element | string;
	href: string;
	text: string;
	className?: string;
}
const NavLink = ({ icon, text, href, className }: navLinkProps) => {
	const pathname = usePathname();
	const linkClass = cx(className, "link", {
		"active-link": pathname === href,
	});

	return (
		<li className={linkClass}>
			<Link href={href} className="flex items-center">
				{icon}
				<span className="text-sm  ml-2">{text}</span>
			</Link>
		</li>
	);
};

export default NavLink;
