import cx from "classnames";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  specialType?: "primary" | "secondary";
  className?: string;
  color: string;
}
export function Button(props: ButtonProps) {
  const { className, color = "blue", ...rest } = props;
  const cls = `flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-${color}-600 rounded-lg hover:bg-${color}-500 focus:outline-none focus:ring focus:ring-${color}-300 focus:ring-opacity-80`;
  const classNames = cx(className, cls);
  // do something with specialProp
  return <button className={classNames} {...rest} />;
}
