import React from "react";
import Badge from "../ui/badge";

export const GameStatusSection = () => {
	const historyTiles = [
		{ id: 1, src: "/tiles-16.svg" },
		{ id: 2, src: "/tiles-12.svg" },
		{ id: 3, src: "/tiles-17.svg" },
		{ id: 4, src: "/tiles-13.svg" },
		{ id: 5, src: "/tiles-9.svg" },
		{ id: 6, src: "/tiles-10.svg" },
		{ id: 7, src: "/tiles-14.svg" },
		{ id: 8, src: "/tiles-11.svg" },
		{ id: 9, src: "/tiles-19.svg" },
		{ id: 10, src: "/tiles-23.svg" },
	];

	const statistics = [
		{ id: 1, icon: "/tiles-15.svg", count: 39 },
		{ id: 2, icon: "/tiles-22.svg", count: 39 },
		{ id: 3, icon: "/tiles-18.svg", count: 9 },
	];

	return (
		<div className="flex flex-col items-center gap-8 w-full">
			<div className="flex items-center gap-2 self-stretch w-full">
				<div className="flex items-center gap-1 flex-1">
					{historyTiles.map((tile) => (
						<img key={tile.id} className="w-8 h-8" alt="Tiles" src={tile.src} />
					))}
				</div>

				<Badge
					variant="outline"
					className="font-body-14px-14px-medium text-[#fcfffe66] text-[14px] tracking-[0px] leading-[20px]"
				>
					LAST 100
				</Badge>

				<div className="flex items-center gap-4">
					{statistics.map((stat) => (
						<div key={stat.id} className="flex items-center gap-2">
							<img className="w-6 h-6" alt="Tiles" src={stat.icon} />
							<span className="font-body-14px-14px-bold text-white text-[14px] tracking-[0px] leading-[20px]">
								{stat.count}
							</span>
						</div>
					))}

					<div className="flex items-center gap-2">
						<div className="flex items-center gap-1">
							<div className="w-6 h-6 bg-[#7145d8] rounded overflow-hidden border-t border-[#ffffff33]">
								<div className="relative w-3.5 h-3.5 top-[5px] left-[5px] overflow-hidden">
									<div className="relative h-3.5">
										<img
											className="absolute w-3.5 h-2 top-[3px] left-0"
											alt="Group"
											src="/group.png"
										/>
									</div>
								</div>
							</div>
						</div>
						<span className="font-body-14px-14px-bold text-white text-[14px] tracking-[0px] leading-[20px]">
							13
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
