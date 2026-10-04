import { useState } from "react";
import { useNavigate } from "react-router";
import { Ruler, Scale, UserRound } from "lucide-react";
import { IoAccessibilityOutline } from "react-icons/io5";
function Body() {
  const navigate = useNavigate();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const handleContinue = () => {
    if (!height || !weight) {
      return;
    }
    navigate("/goals");
  };
  return (
    <main className="min-h-screen w-full bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-[672px]">
        <div className="mb-8">
          <div className="flex gap-2 items-center">
            <div className="w-[40px] h-[40px] rounded-lg bg-[#00A63E] flex items-center justify-center">
              <IoAccessibilityOutline size={24} className="text-white" />
            </div>
            <h1 className="m-0 text-[#0F172B] text-[26px] font-bold">
              FitTrack
            </h1>
          </div>
          <p className="m-0 mt-2 text-[#64748B] text-sm leading-[22px]">
            Let's personalize your experience
          </p>
        </div>
        <div className="flex gap-2 w-full mb-[42px]">
          <div className="flex-1 h-1 rounded-[10px] bg-[#00A63E]" />
          <div className="flex-1 h-1 rounded-[10px] bg-[#00A63E]" />
          <div className="flex-1 h-1 rounded-[10px] bg-gray-200" />
        </div>
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-[44px] h-[44px] shrink-0 rounded-xl bg-[#ECFDF5] flex items-center justify-center border border-[#D1FAE5]">
              <UserRound
                size={23}
                strokeWidth={2.2}
                className="text-[#00A63E]"
              />
            </div>

            <div className="h-[44px] flex flex-col justify-center">
              <h2 className="m-0 text-[#0F172B] text-[20px] font-bold leading-[22px]">
                Your measurements
              </h2>

              <p className="m-0 text-[#64748B] text-[13px] leading-[20px]">
                Help us track your progress.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="height"
            className="flex items-center gap-2 mb-2 text-[#0F172B] text-sm font-medium"
          >
            <Ruler size={17} strokeWidth={2} className="text-[#00A63E]" />
            Height (cm)
          </label>
          <input
            id="height"
            type="number"
            min="1"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
            className="w-full h-12 box-border border-2 border-gray-300 rounded-lg bg-white px-[14px] text-[#0F172B] text-sm outline-none focus:border-[#00A63E]"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="weight"
            className="flex items-center gap-2 mb-2 text-[#0F172B] text-sm font-medium"
          >
            <Scale size={17} strokeWidth={2} className="text-[#00A63E]" />
            Weight (kg)
          </label>
          <input
            id="weight"
            type="number"
            min="1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
            className="w-full h-12 box-border border-2 border-gray-300 rounded-lg bg-white px-[14px] text-[#0F172B] text-sm outline-none focus:border-[#00A63E]"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button className="w-[144px] h-[48px] bg-[#F1F5F9] text-gray-700 rounded-2xl">
            Back
          </button>
          <button
            type="button"
            onClick={() => navigate("/Fit")}
            className="w-[172px] h-12 border-2 border-[#00A63E] rounded-lg bg-[#00A63E] text-white text-sm font-semibold cursor-pointer hover:bg-green-600 transition">
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
export default Body;
