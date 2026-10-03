import { useState } from "react";
import { useNavigate } from "react-router";
function Age() {
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const handleContinue = () => {
    if (!age) return;
    navigate("/body-info");
  };
  return (
    <main className="min-h-screen w-full bg-white flex items-center justify-center px-6">
      {" "}
      <div className="w-full max-w-[400px]">
        {" "}{" "}
        <div className="text-center mb-8">
          {" "}
          <h1 className="m-0 text-[#0F172B] text-[26px] font-bold">
            {" "}
            FitTrack{" "}
          </h1>{" "}
          <p className="m-0 text-[#64748B] text-sm leading-[22px]">
            {" "}
            Let's personalize your experience{" "}
          </p>{" "}
        </div>{" "}{" "}
        <div className="flex gap-2 w-full mb-[42px]">
          {" "}
          <div className="flex-1 h-1 rounded-[10px] bg-[#00A63E]" />{" "}
          <div className="flex-1 h-1 rounded-[10px] bg-gray-200" />{" "}
          <div className="flex-1 h-1 rounded-[10px] bg-gray-200" />{" "}
        </div>{" "}{" "}
        <div className="text-center mb-8">
          {" "}
          <h2 className="m-0 mb-[10px] text-[#0F172B] text-[28px] leading-9 font-bold">
            {" "}
            How old are you?{" "}
          </h2>{" "}
          <p className="m-0 text-[#64748B] text-sm leading-[22px]">
            {" "}
            This helps us calculate your needs.{" "}
          </p>{" "}
        </div>{" "}{" "}
        <div className="mb-6">
          {" "}
          <label
            htmlFor="age"
            className="block mb-2 text-[#0F172B] text-sm font-medium"
          >
            {" "}
            Age{" "}
          </label>{" "}
          <input
            id="age"
            type="number"
            min="1"
            max="120"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            className="w-full h-12 box-border border-2 border-gray-300 rounded-lg bg-white px-[14px] text-[#0F172B] text-sm outline-none focus:border-[#00A63E]"
          />{" "}
        </div>{" "}
        {" "}
        <button
          type="button"
          onClick={handleContinue}
          className="w-full h-12 border-2 border-[#00A63E] rounded-lg bg-[#00A63E] text-white text-sm font-semibold cursor-pointer hover:bg-green-600 transition">
          {" "}
          Continue{" "}
        </button>{" "}
      </div>{" "}
    </main>
  );
}
export default Age;
