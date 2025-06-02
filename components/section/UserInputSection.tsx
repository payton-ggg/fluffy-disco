"use client";
import Button from "../ui/button";

export const UserInputSection = () => {
	const quickActions = [
		{ label: "1/2", action: () => console.log("Half bet") },
		{ label: "X2", action: () => console.log("Double bet") },
		{ label: "MAX", action: () => console.log("Max bet") },
	];

	return (
		<div className="flex flex-col w-full max-w-[500px] items-start gap-1">
			<div className="flex h-11 items-center gap-2 pl-3 pr-1 py-1 w-full bg-[#151618] rounded-lg overflow-hidden">
				<div className="relative w-4 h-4">
					<div className="relative w-3.5 h-3.5 top-px left-px bg-[url(/layer-2.png)] bg-[100%_100%]">
						<img
							className="w-1.5 top-1.5 left-1 absolute h-[3px]"
							alt="Vector"
							src="/vector-9.svg"
						/>
					</div>
				</div>

				<div className="font-body-14px-14px-medium text-[#fcfffe] text-[length:var(--body-14px-14px-medium-font-size)] tracking-[var(--body-14px-14px-medium-letter-spacing)] leading-[var(--body-14px-14px-medium-line-height)] whitespace-nowrap">
					0.00
				</div>

				<div className="flex items-end justify-end gap-0.5 flex-1 self-stretch">
					{quickActions.map((action, index) => (
						<Button
							key={index}
							variant="ghost"
							className="h-auto px-2 py-0 bg-[#343843] hover:bg-[#3a3f4a] rounded-lg"
							onClick={action.action}
						>
							<span className="font-body-14px-14px-bold text-[#fcfffe] text-[length:var(--body-14px-14px-bold-font-size)] tracking-[var(--body-14px-14px-bold-letter-spacing)] leading-[var(--body-14px-14px-bold-line-height)]">
								{action.label}
							</span>
						</Button>
					))}
				</div>
			</div>
		</div>
	);
};
