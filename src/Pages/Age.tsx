import { useState } from "react";
import { useNavigate } from "react-router";
import { IoAccessibilityOutline } from "react-icons/io5";
import { UserRound } from "lucide-react";
function Age() {
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const handleContinue = () => {
    if (!age) {
      return;
    }
    navigate("/body");
  };
  return (
    <main className="min-h-screen w-full bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-[672px]">
        <div className="mb-8">
          <div className="flex gap-2">
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
          <div className="flex-1 h-1 rounded-[10px] bg-gray-200" />
          <div className="flex-1 h-1 rounded-[10px] bg-gray-200" />
        </div>
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-[10px]">
            <UserRound
              size={24}
              strokeWidth={2}
              className="text-[#00A63E] bg-[#ECFDF5] w-[40px] h-[40px] rounded-[10px] border border-b-gray-500"/>
            <h2 className="m-0 text-[#0F172B] font-bold leading-9">
              How old are you?
            </h2>
          </div>
          <p className="m-0 ml-10 text-[#64748B] text-sm leading-[22px]">
            This helps us calculate your needs.
          </p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="age"
            className="block mb-2 text-[#0F172B] text-sm font-medium">
            Age
          </label>
          <input
            id="age"
            type="number"
            min="1"
            max="120"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            className="w-full h-12 box-border border-2 border-gray-300 rounded-lg bg-white px-[14px] text-[#0F172B] text-sm outline-none focus:border-[#00A63E]"/>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleContinue}
            className="w-[172px] h-12 border-2 border-[#00A63E] rounded-lg bg-[#00A63E] text-white text-sm font-semibold cursor-pointer hover:bg-green-600 transition">
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
export default Age;
