import { BetOptionsSection } from "@/components/section/BetOptionSection";
import { BettingSection } from "@/components/section/BettingSection";
import { GameStatusSection } from "@/components/section/GameStatusSection";
import { UserInputSection } from "@/components/section/UserInputSection";

const RouletteStarting = () => {
  return (
    <main className="flex flex-col w-full bg-[#151618] min-h-screen">
      <section className="w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-center py-6 pb-16 px-6">
            <div className="flex flex-col max-w-screen-xl w-full items-center gap-8">
              <GameStatusSection />
              <BetOptionsSection />
              <UserInputSection />
              <BettingSection />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RouletteStarting;
