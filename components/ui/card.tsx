import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
	({ className = "", children, ...props }, ref) => (
		<div
			ref={ref}
			className={`rounded-xl border bg-white text-slate-950 shadow ${className}`}
			{...props}
		>
			{children}
		</div>
	)
);
Card.displayName = "Card";

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
	({ className = "", children, ...props }, ref) => (
		<div
			ref={ref}
			className={`flex flex-col space-y-1.5 p-6 ${className}`}
			{...props}
		>
			{children}
		</div>
	)
);
CardHeader.displayName = "CardHeader";

interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardTitle = React.forwardRef<HTMLDivElement, CardTitleProps>(
	({ className = "", children, ...props }, ref) => (
		<div
			ref={ref}
			className={`font-semibold leading-none tracking-tight ${className}`}
			{...props}
		>
			{children}
		</div>
	)
);
CardTitle.displayName = "CardTitle";

interface CardDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardDescription = React.forwardRef<HTMLDivElement, CardDescriptionProps>(
	({ className = "", children, ...props }, ref) => (
		<div ref={ref} className={`text-sm text-slate-500 ${className}`} {...props}>
			{children}
		</div>
	)
);
CardDescription.displayName = "CardDescription";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
	({ className = "", children, ...props }, ref) => (
		<div ref={ref} className={`p-6 pt-0 ${className}`} {...props}>
			{children}
		</div>
	)
);
CardContent.displayName = "CardContent";

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
	({ className = "", children, ...props }, ref) => (
		<div
			ref={ref}
			className={`flex items-center p-6 pt-0 ${className}`}
			{...props}
		>
			{children}
		</div>
	)
);
CardFooter.displayName = "CardFooter";

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
};
