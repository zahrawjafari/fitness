import { Scale } from "lucide-react";
function Body() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center">Your Body</h1>
        <p className="text-gray-500 text-center mt-2">
          Let's learn more about your body
        </p>
        <div className="mt-8">
          <div className="flex justify-between text-sm mb-2">
            <span>Step 2 of 3</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="w-[66%] h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-10">
          <Scale size={24} className="text-green-500" />
          <h2 className="text-xl font-semibold">Tell us about your body</h2>
        </div>
        <input
          type="number"
          placeholder="Enter your weight"
          className="w-full border rounded-lg px-4 py-3 mt-5 outline-none"
        />
      </div>
    </div>
  );
}
export default Body;
