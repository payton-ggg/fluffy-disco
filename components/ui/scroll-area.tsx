import React from "react";

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

interface ScrollBarProps extends React.HTMLAttributes<HTMLDivElement> {
	orientation?: "vertical" | "horizontal";
}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
	({ className = "", children, ...props }, ref) => (
		<div
			ref={ref}
			className={`relative overflow-hidden ${className}`}
			{...props}
		>
			<div className="h-full w-full rounded-[inherit] overflow-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent hover:scrollbar-thumb-slate-400">
				{children}
			</div>
		</div>
	)
);
ScrollArea.displayName = "ScrollArea";

const ScrollBar = React.forwardRef<HTMLDivElement, ScrollBarProps>(
	({ className = "", orientation = "vertical", ...props }, ref) => {
		const orientationClasses =
			orientation === "vertical"
				? "h-full w-2.5 border-l border-l-transparent p-[1px]"
				: "h-2.5 flex-col border-t border-t-transparent p-[1px]";

		return (
			<div
				ref={ref}
				className={`flex touch-none select-none transition-colors ${orientationClasses} ${className}`}
				{...props}
			>
				<div className="relative flex-1 rounded-full bg-slate-200" />
			</div>
		);
	}
);
ScrollBar.displayName = "ScrollBar";

export { ScrollArea, ScrollBar };
