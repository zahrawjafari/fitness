import { Accessibility, UserRound } from "lucide-react";
import { useNavigate } from "react-router";
function FitTrack() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex justify-center mb-6">
          <Accessibility size={40} className="text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-center">FitTrack</h1>
        <p className="text-gray-500 text-center mt-2">
          Let's personalize your experience
        </p>
        <div className="mt-8">
          <div className="flex justify-between text-sm mb-2">
            <span>Step 1 of 3</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="w-[33%] h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-10">
          <UserRound size={24} className="text-green-500" />
          <h2 className="text-xl font-semibold">How old are you?</h2>
        </div>
        <input
          type="number"
          placeholder="Enter your age"
          className="w-full border rounded-lg px-4 py-3 mt-5 outline-none"/>
        <button
          onClick={() => navigate("/body")}
          className="w-full bg-green-500 text-white py-3 rounded-lg mt-6 font-semibold hover:bg-green-600">
          Continue
        </button>
      </div>
    </div>
  );
}
export default FitTrack;
