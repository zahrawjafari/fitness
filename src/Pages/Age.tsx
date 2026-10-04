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
          <div className="flex-1 h-1 rounded-[10px] bg-gray-200" />
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
                How old are you?
              </h2>

              <p className="m-0 text-[#64748B] text-[13px] leading-[20px]">
                This helps us calculate your needs
              </p>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="age"
            className="block mb-2 text-[#0F172B] text-sm font-medium"
          >
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
            className="w-full h-12 box-border border-2 border-gray-300 rounded-lg bg-white px-[14px] text-[#0F172B] text-sm outline-none focus:border-[#00A63E]"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => navigate("/Body")}
            className="w-[172px] h-12 border-2 border-[#00A63E] rounded-lg bg-[#00A63E] text-white text-sm font-semibold cursor-pointer hover:bg-green-600 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
export default Age;
