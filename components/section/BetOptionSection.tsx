"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

export const BetOptionsSection = () => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [selectedTile, setSelectedTile] = useState<string | null>(null);
  const [isRolling, setIsRolling] = useState(true);

  const betOptions = [
    { id: 1, src: "/tiles-25.svg", width: 42 },
    { id: 2, src: "/tiles-21.svg", width: 100 },
    { id: 3, src: "/tiles-20.svg", width: 100 },
    { id: 4, src: "/tiles-3.svg", width: 100 },
    { id: 5, src: "/tiles-24.svg", width: 100 },
    { id: 6, src: "/tiles-4.svg", width: 100 },
    { id: 7, src: "/tiles.svg", width: 100 },
    { id: 8, src: "/tiles-1.svg", width: 100 },
    { id: 9, src: "/tiles-2.svg", width: 100 },
    { id: 10, src: "/tiles-8.svg", width: 100 },
    { id: 11, src: "/tiles-6.svg", width: 100 },
    { id: 12, src: "/tiles-7.svg", width: 100 },
    { id: 13, src: "/tiles-5.svg", width: 42 },
  ];

  const roll = () => {
    const container = scrollAreaRef.current;
    if (!container) return;

    setSelectedTile(null);
    setIsRolling(true);

    const tileWidths = betOptions.map((opt) => opt.width);
    const tileOffsets = tileWidths.reduce<number[]>(
      (acc, width, i) => [...acc, (acc[i - 1] || 0) + width + 8],
      []
    );

    const randomIndex = Math.floor(Math.random() * betOptions.length);
    const scrollTarget =
      tileOffsets[randomIndex] -
      container.offsetWidth / 2 +
      tileWidths[randomIndex] / 2;

    const baseScroll = container.scrollLeft;
    const loops = 3;
    const fullScrollWidth = tileOffsets[tileOffsets.length - 1];

    const targetScrollLeft = fullScrollWidth * loops + scrollTarget;

    const fullTiles = [...betOptions, ...betOptions, ...betOptions];

    setTimeout(() => {
      gsap.to(container, {
        duration: 4,
        scrollLeft: targetScrollLeft,
        ease: "power4.out",
        onComplete: () => {
          container.scrollLeft = scrollTarget;
          setSelectedTile(betOptions[randomIndex].src);
          setIsRolling(false);
        },
      });
    }, 50);
  };

  useGSAP(() => {
    roll();
  }, []);

  return (
    <div className="relative w-full py-2">
      <ScrollArea className="w-full rounded-lg overflow-hidden">
        <div
          ref={scrollAreaRef}
          className="flex items-center justify-start gap-2 px-0 py-2 w-full overflow-x-scroll scroll-smooth"
        >
          {[...betOptions, ...betOptions, ...betOptions].map(
            (option, index) => (
              <img
                key={index}
                className="h-[100px] transition-transform duration-300"
                style={{ width: `${option.width}px` }}
                alt="Tile"
                src={option.src}
              />
            )
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="absolute w-[111px] h-[116px] top-0 left-0 pointer-events-none [background:linear-gradient(270deg,rgba(20,21,28,0)_0%,rgba(20,21,28,1)_100%)]" />
      <div className="absolute w-[111px] h-[116px] top-0 right-0 pointer-events-none [background:linear-gradient(270deg,rgba(20,21,28,1)_0%,rgba(20,21,28,0)_100%)]" />
      <div className="absolute w-full h-[116px] top-0 left-0 pointer-events-none bg-[#14151c80]" />

      {!isRolling && selectedTile && (
        <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 border-0 w-auto z-10">
          <CardContent className="flex flex-col items-center justify-center p-2">
            <p className="font-body-14px-14px-medium text-white text-center whitespace-nowrap">
              WINNER TILE:
            </p>
            <img src={selectedTile} alt="Winner" className="h-10" />
          </CardContent>
        </Card>
      )}
    </div>
  );
};
