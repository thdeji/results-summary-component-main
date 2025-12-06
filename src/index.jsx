import Stat from "./Stats";
import reactionIcon from "./images/icon-reaction.svg";
import memoryIcon from "./images/icon-memory.svg";
import verbalIcon from "./images/icon-verbal.svg";
import visualIcon from "./images/icon-visual.svg";

function Index() {
  return (
    <div
      className="flex flex-col gap-4
    lg:flex-row md:flex-row"
    >
      <div className="basis-1/2 bg-linear-to-b from-LightSlateBlue to-LightRoyalBlue rounded-2xl py-8 px-4 flex flex-col items-center gap-4 text-center font-hanken">
        <div className="text-Light-lavender font-hanken-medium text-xl">
          Your Result
        </div>
        <div className="bg-linear-to-b from-VioletBlue to-PersianBlue w-50 h-50 rounded-full py-7">
          <h1 className="font-hanken-extrabold text-9xl text-white">76 </h1>
          <p className="text-Light-lavender">of 100</p>
        </div>
        <div className=" w-[60%] text-center">
          <h1 className="font-hanken-medium text-white text-2xl mb-3">Great</h1>
          <p className="text-Light-lavender">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div className="basis-1/2 flex flex-col gap-5 font-hanken p-4">
        <div className=" ml-7 text-Dark-gray-blue font-hanken-bold text-xl">
          <h1>Summary</h1>
        </div>
        <div className="flex flex-col gap-4 font-hanken-medium">
          <Stat
            mainStyle="bg-[hsl(0,100%,67%,0.2)] text-[hsl(0,100%,67%)] mx-7 flex justify-between px-3 py-4 rounded-2xl"
            statStyle="flex gap-2"
            statIcon={reactionIcon}
            Stat="Reaction"
            score="80"
            result=" / 100"
          />
          <Stat
            mainStyle="bg-[hsl(39,100%,56%,0.2)] text-[hsl(39,100%,56%)] mx-7 flex justify-between px-3 py-4 rounded-2xl"
            statStyle="flex gap-2"
            statIcon={memoryIcon}
            Stat="Memory"
            score="80"
            result=" / 100"
          />
          <Stat
            mainStyle="bg-[hsl(166,100%,37%,0.2)] text-[hsl(166,100%,37%)] mx-7 flex justify-between px-3 py-4 rounded-2xl"
            statStyle="flex gap-2"
            statIcon={verbalIcon}
            Stat="Verbal"
            score="80"
            result=" / 100"
          />
          <Stat
            mainStyle="bg-[hsl(234,85%,45%,0.2)] text-[hsl(234,85%,45%)] mx-7 flex justify-between px-3 py-4 rounded-2xl"
            statStyle="flex gap-2"
            statIcon={visualIcon}
            Stat="Visual"
            score="80"
            result=" / 100"
          />
        </div>
        <button
          disabled="disabled"
          className="bg-[hsl(224,30%,27%)] mx-7 py-4 rounded-full text-white cursor-pointer 
          hover:bg-linear-to-b from-LightSlateBlue to-LightRoyalBlue"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
export default Index;
