import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Dumbbell,
  TrendingUp,
  UserRound,
  LogOut,
} from "lucide-react";
function Sidebar() {
  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Exercises",
      path: "/exercises",
      icon: Dumbbell,
    },
    {
      title: "Progress",
      path: "/progress",
      icon: TrendingUp,
    },
    {
      title: "Profile",
      path: "/profile",
      icon: UserRound,
    },
  ];
  return (
    <aside className="w-[240px] min-h-screen bg-white border-r border-[#E2E8F0] px-4 py-6 flex flex-col">
      <div className="flex items-center gap-3 px-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-[#00A63E] flex items-center justify-center">
          <Dumbbell size={21} className="text-white" />
        </div>
        <h1 className="m-0 text-[20px] font-bold text-[#0F172B]">
          FitTrack
        </h1>
      </div>
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `h-11 px-3 rounded-lg flex items-center gap-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#E8F7EE] text-[#00A63E]"
                    : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172B]"
                }`
              }>
              <Icon size={19} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
      <div className="mt-auto pt-6 border-t border-[#E2E8F0]">
        <button
          type="button"
          className="w-full h-11 px-3 rounded-lg flex items-center gap-3 text-sm font-medium text-[#64748B] hover:bg-[#FEF2F2] hover:text-red-500 transition cursor-pointer">
          <LogOut size={19} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
export default Sidebar;