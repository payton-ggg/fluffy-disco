import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Card, CardContent } from "../ui/card";

export const BetOptionsSection = () => {
	const betOptions = [
		{ id: 1, src: "/tiles-25.svg", width: "42px" },
		{ id: 2, src: "/tiles-21.svg", width: "100px" },
		{ id: 3, src: "/tiles-20.svg", width: "100px" },
		{ id: 4, src: "/tiles-3.svg", width: "100px" },
		{ id: 5, src: "/tiles-24.svg", width: "100px" },
		{ id: 6, src: "/tiles-4.svg", width: "100px" },
		{ id: 7, src: "/tiles.svg", width: "100px" },
		{ id: 8, src: "/tiles-1.svg", width: "100px" },
		{ id: 9, src: "/tiles-2.svg", width: "100px" },
		{ id: 10, src: "/tiles-8.svg", width: "100px" },
		{ id: 11, src: "/tiles-6.svg", width: "100px" },
		{ id: 12, src: "/tiles-7.svg", width: "100px" },
		{ id: 13, src: "/tiles-5.svg", width: "42px" },
	];

	return (
		<div className="relative w-full py-2">
			<ScrollArea className="w-full rounded-lg overflow-hidden">
				<div className="flex items-center justify-center gap-2 px-0 py-2 relative w-full">
					{betOptions.map((option) => (
						<img
							key={option.id}
							className={`relative h-[100px]`}
							style={{ width: option.width }}
							alt="Tiles"
							src={option.src}
						/>
					))}
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>

			<div className="absolute w-[111px] h-[116px] top-0 left-0 pointer-events-none [background:linear-gradient(270deg,rgba(20,21,28,0)_0%,rgba(20,21,28,1)_100%)]" />
			<div className="absolute w-[111px] h-[116px] top-0 right-0 pointer-events-none [background:linear-gradient(270deg,rgba(20,21,28,1)_0%,rgba(20,21,28,0)_100%)]" />

			<div className="absolute w-full h-[116px] top-0 left-0 pointer-events-none bg-[#14151c80]" />

			<Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 border-0 w-auto">
				<CardContent className="flex flex-col items-center justify-center p-2">
					<p className="font-body-14px-14px-medium text-white text-center whitespace-nowrap">
						ROLLING IN:
					</p>
					<p className="font-title-20px-20px-bold text-white text-center whitespace-nowrap">
						14.26
					</p>
				</CardContent>
			</Card>
		</div>
	);
};
