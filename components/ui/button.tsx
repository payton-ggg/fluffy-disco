import React from "react";

const Button = ({
	children,
	variant = "default",
	size = "default",
	disabled = false,
	onClick,
	className = "",
	...props
}: any) => {
	const baseClasses =
		"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50";

	const variantClasses = {
		default: "bg-slate-900 text-slate-50 shadow hover:bg-slate-900/90",
		destructive: "bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/90",
		outline:
			"border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900",
		secondary: "bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-100/80",
		ghost: "hover:bg-slate-100 hover:text-slate-900",
		link: "text-slate-900 underline-offset-4 hover:underline",
	};

	const sizeClasses = {
		default: "h-9 px-4 py-2",
		sm: "h-8 rounded-md px-3 text-xs",
		lg: "h-10 rounded-md px-8",
		icon: "h-9 w-9",
	};

	const allClasses = [
		baseClasses,
		variantClasses[variant as keyof typeof variantClasses],
		sizeClasses[size as keyof typeof sizeClasses],
		className,
	].join(" ");

	return (
		<button
			className={allClasses}
			disabled={disabled}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
