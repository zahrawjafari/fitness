import {
  Activity,
  Apple,
  Flame,
  Footprints,
  HeartPulse,
  Play,
  Target,
} from "lucide-react";

import { useNavigate } from "react-router";
import Sidebar from "./Sidebar";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7F8F5] text-[#0F172B]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-[250px] min-h-screen px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-[#0F172B]">
            Welcome back
          </h1>

          <p className="mt-2 text-[#64748B]">Hi there! 👋 Zahra</p>

          <p className="mt-1 text-sm text-[#64748B]">
            Zahra 💪 Ready to crush today? Start logging!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Calories */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF1D6]">
                <Flame size={22} className="text-orange-500" />
              </div>

              <span className="text-sm text-[#8A918C]">Today</span>
            </div>

            <p className="text-sm text-[#8A918C]">Calories</p>

            <h2 className="mt-1 text-2xl font-bold text-[#0F172B]">1,240</h2>

            <p className="mt-1 text-xs text-[#8A918C]">kcal</p>
          </div>

          {/* Steps */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F7D2]">
                <Footprints size={22} className="text-[#00A63E]" />
              </div>

              <span className="text-sm text-[#8A918C]">Today</span>
            </div>

            <p className="text-sm text-[#8A918C]">Steps</p>

            <h2 className="mt-1 text-2xl font-bold text-[#0F172B]">6,840</h2>

            <p className="mt-1 text-xs text-[#8A918C]">steps</p>
          </div>

          {/* Heart Rate */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FDE8E8]">
                <HeartPulse size={22} className="text-red-500" />
              </div>

              <span className="text-sm text-[#8A918C]">BPM</span>
            </div>

            <p className="text-sm text-[#8A918C]">Heart Rate</p>

            <h2 className="mt-1 text-2xl font-bold text-[#0F172B]">72</h2>

            <p className="mt-1 text-xs text-[#8A918C]">resting</p>
          </div>
        </div>

        {/* Start Activity */}
        <div className="mt-8 rounded-2xl bg-[#172018] p-8 text-white">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00A63E] text-white">
                  <Activity size={22} />
                </div>

                <span className="text-sm font-semibold text-[#B8F23F]">
                  Stay Active
                </span>
              </div>

              <h2 className="text-2xl font-bold">
                Ready for your next workout?
              </h2>

              <p className="mt-2 text-sm text-[#AAB1AB]">
                Start an activity and keep moving toward your goal.
              </p>
            </div>

            <button
              onClick={() => navigate("/activity")}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#00A63E] px-6 py-3 font-bold text-white transition hover:bg-[#008F36]"
            >
              <Play size={18} />
              Start Activity
            </button>
          </div>
        </div>

        {/* Goals */}
        <div className="mt-8">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#0F172B]">Your Goals</h2>

              <p className="mt-1 text-sm text-[#8A918C]">
                Keep working toward your daily goals.
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F7D2]">
              <Target size={21} className="text-[#00A63E]" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Exercise */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F7D2]">
                  <Activity size={23} className="text-[#00A63E]" />
                </div>

                <div>
                  <h3 className="font-bold text-[#0F172B]">Exercise</h3>

                  <p className="text-sm text-[#8A918C]">30 minutes today</p>
                </div>
              </div>

              <button
                onClick={() => navigate("/activity")}
                className="mt-5 w-full rounded-xl bg-[#00A63E] py-3 text-sm font-semibold text-white transition hover:bg-[#008F36]"
              >
                Start
              </button>
            </div>

            {/* Food */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF1D6]">
                  <Apple size={23} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172B]">Nutrition</h3>
                  <p className="text-sm text-[#8A918C]">
                    Track your daily meals
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate("/food")}
                className="mt-5 w-full rounded-xl bg-[#00A63E] py-3 text-sm font-semibold text-white transition hover:bg-[#008F36]"
              >
                View Food
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Home;