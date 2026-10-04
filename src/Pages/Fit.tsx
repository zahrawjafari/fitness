import { useState } from "react";
import { useNavigate } from "react-router";
import { IoAccessibilityOutline } from "react-icons/io5";
import {
  Target,
  Scale,
  Dumbbell,
  Flame,
  Utensils,
  CircleDot,
} from "lucide-react";
function Fit() {
  const navigate = useNavigate();
  const [goal, setGoal] = useState("Lose Weight");
  const [calorieIntake, setCalorieIntake] = useState(2000);
  const [calorieBurn, setCalorieBurn] = useState(400);
  const goals = [
    {
      name: "Lose Weight",
      icon: Scale,
    },
    {
      name: "Maintain Weight",
      icon: Target,
    },
    {
      name: "Gain Muscle",
      icon: Dumbbell,
    },
  ];
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
        <div className="flex gap-2 w-full mb-7">
          <div className="flex-1 h-1 rounded-[10px] bg-[#00A63E]" />
          <div className="flex-1 h-1 rounded-[10px] bg-[#00A63E]" />
          <div className="flex-1 h-1 rounded-[10px] bg-[#00A63E]" />
        </div>
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-[44px] h-[44px] shrink-0 rounded-xl bg-[#ECFDF5] flex items-center justify-center border border-[#D1FAE5]">
              <Target size={23} strokeWidth={2.2} className="text-[#00A63E]" />
            </div>
            <div className="h-[44px] flex flex-col justify-center">
              <h2 className="m-0 text-[#0F172B] text-[20px] font-bold leading-[22px]">
                What's your goal?
              </h2>
              <p className="m-0 text-[#64748B] text-[13px] leading-[20px]">
                We'll tailor your experience
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mb-8">
          {goals.map((item) => {
            const Icon = item.icon;
            const isSelected = goal === item.name;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setGoal(item.name)}
                className={`w-full h-12 px-4 rounded-lg flex items-center gap-3 text-left cursor-pointer transition ${
                  isSelected
                    ? "border-2 border-[#00A63E] bg-[#F0FDF4]"
                    : "border-2 border-[#D1D5DB] bg-white hover:border-[#86EFAC]"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? "bg-[#DCFCE7]" : "bg-[#F1F5F9]"
                  }`}
                >
                  <Icon
                    size={18}
                    className={isSelected ? "text-[#00A63E]" : "text-[#64748B]"}
                  />
                </div>
                <span
                  className={`text-sm font-medium ${
                    isSelected ? "text-[#00A63E]" : "text-[#0F172B]"
                  }`}
                >
                  {item.name}
                </span>
                {isSelected && (
                  <div className="ml-auto w-5 h-5 rounded-full bg-[#00A63E] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-lg bg-[#FFF7ED] flex items-center justify-center">
              <Flame size={19} className="text-orange-500" />
            </div>
            <h2 className="m-0 text-[#0F172B] text-lg font-semibold">
              Daily Targets
            </h2>
          </div>
          <div className="mb-7">
            <div className="flex items-center justify-between mb-[10px]">
              <div className="flex items-center gap-2">
                <Utensils size={16} className="text-[#64748B]" />
                <span className="text-[#475569] text-sm">
                  Daily Calorie Intake
                </span>
              </div>
              <span className="text-[#0F172B] text-sm font-semibold">
                {calorieIntake} kcal
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="3000"
              step="50"
              value={calorieIntake}
              onChange={(e) => setCalorieIntake(Number(e.target.value))}
              className="w-full h-1.5 accent-[#00A63E] cursor-pointer"
            />
          </div>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-[10px]">
              <div className="flex items-center gap-2">
                <Flame size={16} className="text-orange-500" />
                <span className="text-[#475569] text-sm">
                  Daily Calorie Burn
                </span>
              </div>
              <span className="text-[#0F172B] text-sm font-semibold">
                {calorieBurn} kcal
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              value={calorieBurn}
              onChange={(e) => setCalorieBurn(Number(e.target.value))}
              className="w-full h-1.5 accent-[#00A63E] cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 text-gray-600 bg-[#F1F5F9] w-[144px] h-[48px] text-sm font-medium cursor-pointer hover:text-[#00A63E] transition rounded-2xl justify-center"
          >
            ← Back
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-[172px] h-12 border-2 border-[#00A63E] rounded-lg bg-[#00A63E] text-white text-sm font-semibold cursor-pointer hover:bg-green-600 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}

export default Fit;