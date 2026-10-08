import { NavLink } from "react-router";
import { Home, LayoutDashboard, Apple, Activity, User } from "lucide-react";
import { IoAccessibilityOutline } from "react-icons/io5";
function Sidebar() {
  const menuItems = [
    {
      to: "/home",
      label: "Home",
      icon: Home,
    },
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      to: "/food",
      label: "Food",
      icon: Apple,
    },
    {
      to: "/activity",
      label: "Activity",
      icon: Activity,
    },
    {
      to: "/profile",
      label: "Profile",
      icon: User,
    },
  ];
  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[250px] flex-col border-r border-[#E7EDE4] bg-white px-5 py-8">
      <div className="mb-10 px-3">
        <div className="flex items-center gap-3">
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-[#00A63E]">
            <IoAccessibilityOutline size={24} className="text-white" />
          </div>
          <h1 className="m-0 text-[26px] font-bold text-[#0F172B]">FitTrack</h1>
        </div>
      </div>
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#E8F7D2] text-[#172018]"
                    : "text-[#647067] hover:bg-[#F5F8F3] hover:text-[#172018]"
                }`
              }
            >
              <Icon size={20} strokeWidth={2} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
export default Sidebar;
