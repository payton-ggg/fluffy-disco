import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	variant?: "default" | "secondary" | "destructive" | "outline";
}

const Badge: React.FC<BadgeProps> = ({
	children,
	variant = "default",
	className = "",
	...props
}) => {
	// Базовые классы
	const baseClasses =
		"inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2";

	// Варианты стилей
	const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
		default:
			"border-transparent bg-slate-900 text-slate-50 shadow hover:bg-slate-900/80",
		secondary:
			"border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80",
		destructive:
			"border-transparent bg-red-500 text-slate-50 shadow hover:bg-red-500/80",
		outline: "text-slate-950",
	};

	// Собираем все классы
	const allClasses = [baseClasses, variantClasses[variant], className].join(
		" "
	);

	return (
		<div className={allClasses} {...props}>
			{children}
		</div>
	);
};

export default Badge;
