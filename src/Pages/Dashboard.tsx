import { useNavigate } from "react-router";
import {
  Flame,
  Footprints,
  Dumbbell,
  Clock3,
  UserRound,
  Utensils,
  Play,
  TrendingUp,
  User,
} from "lucide-react";
function Dashboard() {
  const navigate = useNavigate();
  const stats = [
    {
      icon: Flame,
      title: "Calories",
      value: "1,240",
      unit: "kcal",
    },
    {
      icon: Footprints,
      title: "Steps",
      value: "6,842",
      unit: "steps",
    },
    {
      icon: Dumbbell,
      title: "Workouts",
      value: "4",
      unit: "sessions",
    },
    {
      icon: Clock3,
      title: "Active Time",
      value: "2h 45m",
      unit: "",
    },
  ];
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-[30px] pb-[50px]">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex items-center justify-between mb-[34px]">
          <div>
            <h1 className="m-0 text-[30px] font-bold text-[#0F172B]">
              Welcome back, User!
            </h1>
            <p className="m-0 mt-2 text-sm text-[#64748B]">
              Here's your fitness overview for today.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="w-[46px] h-[46px] rounded-full border border-[#E2E8F0] bg-white text-[#00A63E] font-bold cursor-pointer flex items-center justify-center hover:bg-[#F0FDF4] transition">
            <UserRound size={21} />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-[18px] mb-6">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-[#E2E8F0] rounded-[18px] p-5">
                <div className="w-[42px] h-[42px] rounded-[11px] bg-[#E8F7EE] flex items-center justify-center mb-4">
                  <Icon
                    size={20}
                    className="text-[#00A63E]"
                  />
                </div>
                <p className="m-0 text-[#64748B] text-[13px]">
                  {item.title}
                </p>
                <div className="flex items-baseline gap-[5px] mt-[5px]">
                  <strong className="text-[25px] text-[#0F172B]">
                    {item.value}
                  </strong>
                  {item.unit && (
                    <span className="text-xs text-[#94A3B8]">
                      {item.unit}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white border border-[#E2E8F0] rounded-[18px] p-[25px]">
            <h2 className="m-0 text-[#0F172B] text-[19px]">
              Daily Targets
            </h2>
            <p className="m-0 mt-[7px] mb-[25px] text-[#64748B] text-[13px]">
              Keep moving toward your daily goals.
            </p>
            <div className="mb-[27px]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] font-semibold text-[#334155]">
                  Daily Calorie Intake
                </span>
                <span className="text-[13px] text-[#00A63E] font-semibold">
                  62%
                </span>
              </div>
              <div className="h-2 bg-[#E5E7EB] rounded-[20px] overflow-hidden">
                <div className="w-[62%] h-full bg-[#00A63E] rounded-[20px]" />
              </div>
              <p className="m-0 mt-[7px] text-[#94A3B8] text-[11px]">
                1,240 / 2,000 kcal
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] font-semibold text-[#334155]">
                  Daily Calorie Burn
                </span>
                <span className="text-[13px] text-[#00A63E] font-semibold">
                  70%
                </span>
              </div>
              <div className="h-2 bg-[#E5E7EB] rounded-[20px] overflow-hidden">
                <div className="w-[70%] h-full bg-[#00A63E] rounded-[20px]" />
              </div>
              <p className="m-0 mt-[7px] text-[#94A3B8] text-[11px]">
                280 / 400 kcal
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-[18px] p-[25px]">
            <h2 className="m-0 text-[#0F172B] text-[19px]">
              Today's Workout
            </h2>
            <p className="m-0 mt-[7px] mb-5 text-[#64748B] text-[13px]">
              Your scheduled workout for today.
            </p>
            <div className="bg-[#F8FAFC] rounded-[14px] p-5">
              <div className="flex items-center gap-[13px]">
                <div className="w-[50px] h-[50px] rounded-[13px] bg-[#E8F7EE] flex items-center justify-center">
                  <Dumbbell
                    size={24}
                    className="text-[#00A63E]"/>
                </div>
                <div>
                  <h3 className="m-0 text-base text-[#0F172B]">
                    Full Body Workout
                  </h3>
                  <p className="m-0 mt-[5px] text-xs text-[#64748B]">
                    30 min • Beginner
                  </p>
                </div>
              </div>
              <p className="text-[#64748B] text-xs leading-[1.7] mt-4 mb-4">
                A balanced workout designed to train your entire body.
              </p>
              <button
                type="button"
                onClick={() => navigate("/exercises")}
                className="w-full h-[43px] border-0 rounded-[10px] bg-[#00A63E] text-white text-[13px] font-semibold cursor-pointer flex items-center justify-center gap-2 hover:bg-green-600 transition">
                <Play size={16} />
                Start Workout
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-white border border-[#E2E8F0] rounded-[18px] p-[25px]">
          <h2 className="m-0 text-[19px] text-[#0F172B]">
            Quick Actions
          </h2>
          <div className="grid grid-cols-3 gap-[15px] mt-[18px]">
            <button
              type="button"
              onClick={() => navigate("/exercises")}
              className="bg-white border border-[#E2E8F0] rounded-xl p-[17px] text-left cursor-pointer hover:border-[#00A63E] transition">
              <div className="flex items-center gap-2">
                <Dumbbell
                  size={17}
                  className="text-[#00A63E]"/>
                <strong className="text-[#0F172B] text-[13px]">
                  Browse Exercises
                </strong>
              </div>
              <p className="m-0 mt-[5px] text-[#64748B] text-[11px]">
                Find a workout
              </p>
            </button>
            <button
              type="button"
              onClick={() => navigate("/progress")}
              className="bg-white border border-[#E2E8F0] rounded-xl p-[17px] text-left cursor-pointer hover:border-[#00A63E] transition">
              <div className="flex items-center gap-2">
                <TrendingUp
                  size={17}
                  className="text-[#00A63E]"/>
                <strong className="text-[#0F172B] text-[13px]">
                  View Progress
                </strong>
              </div>
              <p className="m-0 mt-[5px] text-[#64748B] text-[11px]">
                Track your results
              </p>
            </button>
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="bg-white border border-[#E2E8F0] rounded-xl p-[17px] text-left cursor-pointer hover:border-[#00A63E] transition">
              <div className="flex items-center gap-2">
                <User
                  size={17}
                  className="text-[#00A63E]"/>
                <strong className="text-[#0F172B] text-[13px]">
                  My Profile
                </strong>
              </div>
              <p className="m-0 mt-[5px] text-[#64748B] text-[11px]">
                Manage your account
              </p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Dashboard;