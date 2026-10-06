import {
  Activity,
  Apple,
  Home as HomeIcon,
  User,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    {
      name: "Home",
      path: "/home",
      icon: HomeIcon,
    },
    {
      name: "Food",
      path: "/food",
      icon: Apple,
    },
    {
      name: "Activity",
      path: "/activity",
      icon: Activity,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[250px] flex-col border-r border-[#E5E7E2] bg-white">

      {/* Logo */}
      <div className="flex h-[90px] items-center px-7">
        <button
          onClick={() => navigate("/home")}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B8F23F]">
            <Activity
              size={22}
              className="text-[#172018]"
            />
          </div>

          <div className="text-left">
            <h1 className="text-lg font-extrabold text-[#172018]">
              FitTrack
            </h1>

            <p className="text-[10px] text-[#8A918C]">
              Fitness & Health
            </p>
          </div>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-2 px-5 pt-8">

        {menu.map((item) => {
          const Icon = item.icon;

          const active =
            location.pathname === item.path;

          return (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`flex h-12 w-full items-center gap-4 rounded-xl px-4 text-sm transition ${
                active
                  ? "bg-[#B8F23F] font-bold text-[#172018]"
                  : "font-medium text-[#68706B] hover:bg-[#F3F5F0] hover:text-[#172018]"
              }`}
            >
              <Icon
                size={20}
                strokeWidth={active ? 2.5 : 2}
              />

              <span>{item.name}</span>
            </button>
          );
        })}

      </nav>

      {/* User */}
      <div className="border-t border-[#E5E7E2] p-5">
        <div className="flex items-center gap-3 rounded-xl bg-[#F5F7F3] p-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#172018]">
            <User
              size={18}
              className="text-white"
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-bold text-[#172018]">
              Fitness User
            </p>

            <p className="mt-1 text-[10px] text-[#8A918C]">
              Keep going!
            </p>
          </div>

        </div>
      </div>
    </aside>
  );
}

export default Sidebar;