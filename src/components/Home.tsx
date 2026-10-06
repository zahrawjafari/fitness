import {
  Activity,
  Apple,
  Bell,
  Flame,
  Footprints,
  HeartPulse,
  Play,
  Target,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router";
import Sidebar from "./Sidebar";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#F7F8F5] text-[#172018]">

      <Sidebar />

      <div className="ml-[250px] min-h-screen px-8 py-7">

        {/* Header */}
        <header className="mb-8 flex items-center justify-between">

          <div>
            <p className="mb-1 text-sm text-[#8A918C]">
              Tuesday, October 6
            </p>

            <h1 className="text-3xl font-extrabold">
              Good evening, Fitness User 👋
            </h1>
          </div>

          <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#E1E5DF] bg-white">
            <Bell size={19} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#B8F23F]" />
          </button>

        </header>

        {/* Hero */}
        <section className="relative mb-7 overflow-hidden rounded-[26px] bg-[#172018] px-9 py-10 text-white">

          <div className="relative z-10 max-w-[600px]">

            <div className="mb-5 flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
              <Flame
                size={15}
                className="text-[#B8F23F]"
              />

              <span className="text-xs font-bold text-[#B8F23F]">
                7 day streak
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight">
              Stronger every day.
              <span className="block text-[#B8F23F]">
                One step at a time.
              </span>
            </h2>

            <p className="mt-4 max-w-[520px] text-sm leading-6 text-white/60">
              Stay consistent, track your progress, and build
              a healthier version of yourself.
            </p>

            <button
              onClick={() => navigate("/activity")}
              className="mt-7 flex items-center gap-2 rounded-xl bg-[#B8F23F] px-5 py-3 text-sm font-bold text-[#172018]"
            >
              <Play
                size={15}
                fill="currentColor"
              />

              Start Activity
            </button>

          </div>

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[50px] border-[#B8F23F]/10" />

        </section>

        {/* Stats */}
        <section className="mb-7 grid grid-cols-4 gap-4">

          <div className="rounded-2xl border border-[#E2E6E0] bg-white p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1DC]">
              <Flame size={19} className="text-[#E99A18]" />
            </div>

            <p className="mt-5 text-2xl font-extrabold">
              420
            </p>

            <p className="mt-1 text-xs text-[#8A918C]">
              Calories burned
            </p>
          </div>

          <div className="rounded-2xl border border-[#E2E6E0] bg-white p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFF8DE]">
              <Activity size={19} />
            </div>

            <p className="mt-5 text-2xl font-extrabold">
              12
            </p>

            <p className="mt-1 text-xs text-[#8A918C]">
              Activities
            </p>
          </div>

          <div className="rounded-2xl border border-[#E2E6E0] bg-white p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF3FF]">
              <Footprints
                size={19}
                className="text-[#587BE8]"
              />
            </div>

            <p className="mt-5 text-2xl font-extrabold">
              8.4K
            </p>

            <p className="mt-1 text-xs text-[#8A918C]">
              Steps today
            </p>
          </div>

          <div className="rounded-2xl border border-[#E2E6E0] bg-white p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4EEFF]">
              <Target
                size={19}
                className="text-[#9862D7]"
              />
            </div>

            <p className="mt-5 text-2xl font-extrabold">
              75%
            </p>

            <p className="mt-1 text-xs text-[#8A918C]">
              Monthly goal
            </p>
          </div>

        </section>

        {/* Main Content */}
        <section className="grid grid-cols-[1.4fr_1fr] gap-6">

          {/* Activity Card */}
          <div className="rounded-2xl border border-[#E2E6E0] bg-white p-6">

            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-extrabold">
                  Today's Activity
                </h2>

                <p className="mt-1 text-xs text-[#8A918C]">
                  Your activity for today
                </p>
              </div>

              <button
                onClick={() => navigate("/activity")}
                className="text-xs font-bold"
              >
                View all
              </button>
            </div>

            <div className="rounded-2xl bg-[#EFF8DE] p-5">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#172018] text-[#B8F23F]">
                    <Activity size={25} />
                  </div>

                  <div>
                    <h3 className="font-extrabold">
                      Full Body Workout
                    </h3>

                    <p className="mt-2 text-xs text-[#737A75]">
                      35 min • 320 kcal
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => navigate("/activity")}
                  className="flex items-center gap-2 rounded-xl bg-[#172018] px-5 py-3 text-xs font-bold text-white"
                >
                  <Play
                    size={13}
                    fill="currentColor"
                  />

                  Start
                </button>

              </div>

            </div>

            <div className="mt-5 space-y-3">

              <div className="flex items-center justify-between rounded-xl border border-[#EDF0EC] p-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold">
                    01
                  </span>

                  <div>
                    <p className="text-sm font-bold">
                      Squats
                    </p>

                    <p className="mt-1 text-[11px] text-[#8A918C]">
                      3 sets × 12 reps
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-[#EFF8DE] px-3 py-1 text-[10px] font-bold">
                  Done
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-[#EDF0EC] p-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold">
                    02
                  </span>

                  <div>
                    <p className="text-sm font-bold">
                      Push Ups
                    </p>

                    <p className="mt-1 text-[11px] text-[#8A918C]">
                      3 sets × 10 reps
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-[#EFF8DE] px-3 py-1 text-[10px] font-bold">
                  Done
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-[#EDF0EC] p-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold">
                    03
                  </span>

                  <div>
                    <p className="text-sm font-bold">
                      Lunges
                    </p>

                    <p className="mt-1 text-[11px] text-[#8A918C]">
                      3 sets × 12 reps
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-[#FFF3D9] px-3 py-1 text-[10px] font-bold">
                  Next
                </span>
              </div>

            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">

            {/* Food */}
            <div className="rounded-2xl border border-[#E2E6E0] bg-white p-6">

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-lg font-extrabold">
                    Today's Food
                  </h2>

                  <p className="mt-1 text-xs text-[#8A918C]">
                    Your nutrition today
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1DC]">
                  <Apple
                    size={19}
                    className="text-[#E99A18]"
                  />
                </div>

              </div>

              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-extrabold">
                    1,420
                  </p>

                  <p className="mt-1 text-xs text-[#8A918C]">
                    kcal consumed
                  </p>
                </div>

                <p className="text-xs font-bold">
                  / 2,000 kcal
                </p>
              </div>

              <div className="mt-5 h-2.5 rounded-full bg-[#EEF0EB]">
                <div className="h-full w-[71%] rounded-full bg-[#B8F23F]" />
              </div>

              <button
                onClick={() => navigate("/food")}
                className="mt-5 w-full rounded-xl border border-[#E1E5DF] py-3 text-xs font-bold"
              >
                View Food
              </button>
            </div>

            {/* Goal */}
            <div className="rounded-2xl border border-[#E2E6E0] bg-white p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF8DE]">
                  <HeartPulse size={20} />
                </div>

                <div>
                  <h2 className="font-extrabold">
                    Keep going!
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-[#8A918C]">
                    Stay consistent and keep working
                    toward your fitness goals.
                  </p>
                </div>

              </div>

              <div className="mt-6">
                <div className="mb-2 flex justify-between">
                  <span className="text-xs text-[#8A918C]">
                    Monthly goal
                  </span>

                  <span className="text-xs font-bold">
                    75%
                  </span>
                </div>

                <div className="h-2.5 rounded-full bg-[#EEF0EB]">
                  <div className="h-full w-[75%] rounded-full bg-[#B8F23F]" />
                </div>
              </div>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

export default Home;