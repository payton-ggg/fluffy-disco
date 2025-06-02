import React from "react";
import { CardContent, CardDescription } from "@/components/ui/card";
export const BettingSection = () => {
	const betCategories = [
		{
			title: "BET ON RED",
			payout: "PAYS 2X",
			bgColor: "bg-[#ff4242]",
			totalBets: "4 Bets total",
			totalAmount: "100.00",
		},
		{
			title: "BET ON GREEN",
			payout: "PAYS 14X",
			bgColor: "bg-[#47ff68]",
			totalBets: "4 Bets total",
			totalAmount: "100.00",
		},
		{
			title: "BET ON BLACK",
			payout: "PAYS 2X",
			bgColor: "bg-[#343843]",
			totalBets: "4 Bets total",
			totalAmount: "100.00",
		},
		{
			title: "BET ON JOKER",
			payout: "PAYS 7X",
			bgColor: "bg-[#7145d8]",
			totalBets: "4 Bets total",
			totalAmount: "100.00",
		},
	];

	const userBets = [
		{ amount: "100.00", highlighted: false },
		{ amount: "80.00", highlighted: true },
		{ amount: "50.00", highlighted: false },
		{ amount: "0.80", highlighted: false },
	];

	return (
		<div className="flex gap-4 w-full">
			{betCategories.map((category, index) => (
				<div key={index} className="flex flex-col gap-3 flex-1">
					<div
						className={`flex h-11 px-4 py-0 items-center justify-center gap-2 rounded-lg ${category.bgColor} shadow-[inset_0px_1px_0px_#ffffff4c]`}
					>
						<div className="flex-1 font-body-14px-14px-bold font-[number:var(--body-14px-14px-bold-font-weight)] text-[#fcfffe] text-[length:var(--body-14px-14px-bold-font-size)] tracking-[var(--body-14px-14px-bold-letter-spacing)] leading-[var(--body-14px-14px-bold-line-height)] [font-style:var(--body-14px-14px-bold-font-style)]">
							{category.title}
						</div>
						<div className="w-fit [text-shadow:0px_1px_0px_#0000000d] font-body-14px-14px-bold font-[number:var(--body-14px-14px-bold-font-weight)] text-[#fcfffe] text-[length:var(--body-14px-14px-bold-font-size)] text-center tracking-[var(--body-14px-14px-bold-letter-spacing)] leading-[var(--body-14px-14px-bold-line-height)] whitespace-nowrap [font-style:var(--body-14px-14px-bold-font-style)]">
							{category.payout}
						</div>
					</div>

					<div className="flex items-center justify-between px-3 py-0 rounded-lg">
						<div className="font-body-14px-14px-medium font-[number:var(--body-14px-14px-medium-font-weight)] text-[#fcfffecc] text-[length:var(--body-14px-14px-medium-font-size)] tracking-[var(--body-14px-14px-medium-letter-spacing)] leading-[var(--body-14px-14px-medium-line-height)] [font-style:var(--body-14px-14px-medium-font-style)]">
							{category.totalBets}
						</div>
						<div className="flex items-center gap-2">
							<div className="relative w-5 h-5">
								<div
									className={`relative w-[18px] h-[18px] top-px left-px bg-[100%_100%] bg-[url(/layer-2-${
										index * 5 + 1
									}.png)]`}
								>
									<img
										className="w-[7px] h-[3px] absolute top-[7px] left-[5px]"
										alt="Vector"
										src={index === 3 ? "/vector-12.svg" : "/vector.svg"}
									/>
								</div>
							</div>
							<div className="font-body-14px-14px-medium font-[number:var(--body-14px-14px-medium-font-weight)] text-[#fcfffe] text-[length:var(--body-14px-14px-medium-font-size)] text-center tracking-[var(--body-14px-14px-medium-letter-spacing)] leading-[var(--body-14px-14px-medium-line-height)] whitespace-nowrap [font-style:var(--body-14px-14px-medium-font-style)]">
								{category.totalAmount}
							</div>
						</div>
					</div>

					<CardDescription className="bg-[#23262c] border-0 rounded-lg">
						<CardContent className="p-0 flex flex-col gap-0">
							{userBets.map((bet, betIndex) => (
								<div
									key={betIndex}
									className={`flex items-center justify-between px-3 py-2 ${
										bet.highlighted ? "bg-[#2d313c]" : ""
									}`}
								>
									<div className="flex items-center gap-1.5 flex-1">
										<div className="w-5 h-5 rounded-[10px]" />
										<img
											className="w-4 h-4"
											alt="Rank icons"
											src={
												index >= 2
													? `/rank-icons${index === 2 ? "-8" : "-11"}.svg`
													: "/rank-icons.svg"
											}
										/>
										<div className="flex-1 font-body-14px-14px-medium font-[number:var(--body-14px-14px-medium-font-weight)] text-[#fcfffecc] text-[length:var(--body-14px-14px-medium-font-size)] tracking-[var(--body-14px-14px-medium-letter-spacing)] leading-[var(--body-14px-14px-medium-line-height)] [font-style:var(--body-14px-14px-medium-font-style)]">
											User
										</div>
									</div>
									<div className="flex items-center gap-2">
										<div className="relative w-5 h-5">
											<div
												className={`relative w-[18px] h-[18px] top-px left-px bg-[100%_100%] bg-[url(/layer-2-${
													index * 5 + betIndex + 2
												}.png)]`}
											>
												<img
													className="w-[7px] h-[3px] absolute top-[7px] left-[5px]"
													alt="Vector"
													src={index === 3 ? "/vector-12.svg" : "/vector.svg"}
												/>
											</div>
										</div>
										<div className="font-body-14px-14px-medium font-[number:var(--body-14px-14px-medium-font-weight)] text-[#fcfffecc] text-[length:var(--body-14px-14px-medium-font-size)] text-center tracking-[var(--body-14px-14px-medium-letter-spacing)] leading-[var(--body-14px-14px-medium-line-height)] whitespace-nowrap [font-style:var(--body-14px-14px-medium-font-style)]">
											{bet.amount}
										</div>
									</div>
								</div>
							))}
						</CardContent>
					</CardDescription>
				</div>
			))}
		</div>
	);
};
