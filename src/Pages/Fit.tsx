import { IoAccessibilityOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
const Fit = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center font-outfit px-4 py-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#00BC7D] rounded-xl flex items-center justify-center">
          <IoAccessibilityOutline size={24} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">FitTrack</h1>
      </div>
      <div className="mt-8">
        <h2 className="text-gray-500 mt-2">
          Let's personalize your experience
        </h2>
      </div>
      <div className="w-full max-w-[672px] mt-8">
        <div className="flex justify-between mb-2">
          <p className="text-sm text-gray-500">Step 3 of 3</p>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-[100%] bg-[#00A63E] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
export default Fit;
