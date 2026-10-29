import {
  Activity,
  Flame,
  Footprints,
  HeartPulse,
  Play,
  Target,
  Utensils,
  Scale,
} from "lucide-react";

import { useNavigate } from "react-router";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import Sidebar from "./Sidebar";

const weeklyActivity = [
  { day: "Mon", steps: 4200 },
  { day: "Tue", steps: 6100 },
  { day: "Wed", steps: 5300 },
  { day: "Thu", steps: 7800 },
  { day: "Fri", steps: 6400 },
  { day: "Sat", steps: 8500 },
  { day: "Sun", steps: 6840 },
];

function Home() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username") || "User";

  const height = Number(localStorage.getItem("height"));
  const weight = Number(localStorage.getItem("weight"));

  const hasBodyData =
    height > 0 &&
    weight > 0 &&
    Number.isFinite(height) &&
    Number.isFinite(weight);

  const heightInMeters = height > 3 ? height / 100 : height;

  const bmi =
    hasBodyData && heightInMeters > 0
      ? (weight / (heightInMeters * heightInMeters)).toFixed(1)
      : "--";

  const bmiNumber = Number(bmi);

  let bmiCategory = "Enter your height and weight";

  if (bmi !== "--") {
    if (bmiNumber < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmiNumber < 25) {
      bmiCategory = "Normal weight";
    } else if (bmiNumber < 30) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obesity range";
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F8F5] text-[#0F172B]">
      <Sidebar />

      <main className="ml-[250px] min-h-screen px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold">Welcome back</h1>

          <p className="mt-2 text-[#64748B]">Hi there! 👋 {username}</p>

          <p className="mt-1 text-sm text-[#64748B]">
            {username} 💪 Ready to crush today? Start logging!
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {/* Calories */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF1D6]">
                <Flame size={22} className="text-orange-500" />
              </div>
              <span className="text-sm text-[#8A918C]">Today</span>
            </div>

            <p className="text-sm text-[#8A918C]">Calories</p>
            <h2 className="mt-1 text-2xl font-bold">1,240</h2>
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
            <h2 className="mt-1 text-2xl font-bold">6,840</h2>
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
            <h2 className="mt-1 text-2xl font-bold">72</h2>
            <p className="mt-1 text-xs text-[#8A918C]">resting</p>
          </div>

          {/* BMI */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F7D2]">
                <Scale size={22} className="text-[#00A63E]" />
              </div>
              <span className="text-sm text-[#8A918C]">BMI</span>
            </div>

            <p className="text-sm text-[#8A918C]">Body Mass Index</p>
            <h2 className="mt-1 text-2xl font-bold">{bmi}</h2>
            <p className="mt-1 text-xs text-[#8A918C]">{bmiCategory}</p>
          </div>
        </div>

        {/* Weekly Activity Chart */}
        <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold">Weekly Activity</h2>
              <p className="mt-1 text-sm text-[#8A918C]">
                Your steps throughout the week
              </p>
            </div>

            <div className="rounded-xl bg-[#E8F7D2] px-4 py-2">
              <p className="text-xs text-[#647067]">Daily average</p>
              <p className="mt-1 font-bold text-[#00A63E]">
                {Math.round(
                  weeklyActivity.reduce(
                    (total, item) => total + item.steps,
                    0,
                  ) / weeklyActivity.length,
                ).toLocaleString()}{" "}
                steps
              </p>
            </div>
          </div>

          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={weeklyActivity}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="stepsGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#00A63E" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#00A63E" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid stroke="#EEF1EC" vertical={false} />

                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#8A918C", fontSize: 12 }}
                  dy={10}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#8A918C", fontSize: 12 }}
                  width={45}
                  tickFormatter={(value: number) => `${value / 1000}k`}
                />

                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #E7EDE4",
                    fontSize: "13px",
                  }}
                  formatter={(value) => [
                    `${Number(value).toLocaleString()} steps`,
                    "Steps",
                  ]}
                />

                <Area
                  type="monotone"
                  dataKey="steps"
                  stroke="#00A63E"
                  strokeWidth={3}
                  fill="url(#stepsGradient)"
                  activeDot={{
                    r: 6,
                    fill: "#00A63E",
                    stroke: "#FFFFFF",
                    strokeWidth: 2,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Start Activity */}
        <section className="mt-8 rounded-2xl bg-[#172018] p-8 text-white">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00A63E]">
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
        </section>

        {/* Goals */}
        <section className="mt-8">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Your Goals</h2>
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
                  <h3 className="font-bold">Exercise</h3>
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

            {/* Nutrition */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF1D6]">
                  <Utensils size={23} className="text-orange-500" />
                </div>

                <div>
                  <h3 className="font-bold">Nutrition</h3>
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
        </section>
      </main>
    </div>
  );
}
export default Home;
