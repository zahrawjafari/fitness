import { FormEvent, useState } from "react";
import { AtSign, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !email || !password) {
      return;
    }
    navigate("/age");
  };
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-[400px] mx-auto">
        <div className=" mb-8">
          <h1 className="m-0 text-[#0F172B] text-[32px] leading-10 font-bold">
            Sign Up
          </h1>
          <p className="mt-2 text-[#64748B] text-sm leading-5">
            Please enter your details to create an account.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 text-[#0F172B] text-sm font-medium">
              Username
            </label>
            <div className="relative w-full h-[46px]">
              <AtSign
                size={18}
                className="absolute left-[14px] top-1/2 -translate-y-1/2 text-gray-500 z-10"/>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full h-[46px] box-border border-2 border-gray-300 rounded-lg bg-white pl-11 pr-[14px] text-[#0F172B] text-sm outline-none focus:border-green-500"/>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-[#0F172B] text-sm font-medium">
              Email
            </label>
            <div className="relative w-full h-[46px]">
              <Mail
                size={18}
                className="absolute left-[14px] top-1/2 -translate-y-1/2 text-gray-500 z-10"/>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full h-[46px] box-border border-2 border-gray-300 rounded-lg bg-white pl-11 pr-[14px] text-[#0F172B] text-sm outline-none focus:border-green-500"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-[#0F172B] text-sm font-medium">
              Password
            </label>
            <div className="relative w-full h-[46px]">
              <Lock
                size={18}
                className="absolute left-[14px] top-1/2 -translate-y-1/2 text-gray-500 z-10"/>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full h-[46px] box-border border-2 border-gray-300 rounded-lg bg-white pl-11 pr-12 text-[#0F172B] text-sm outline-none focus:border-green-500"z/>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-0 w-11 h-[46px] border-none bg-transparent flex items-center justify-center text-gray-500 cursor-pointer">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-[46px] box-border border-2 border-[#00A63E] rounded-lg bg-[#00A63E] text-white text-sm font-semibold cursor-pointer flex items-center justify-center hover:bg-green-600 transition">
            Sign Up
          </button>
        </form>
        <p className="mt-5 text-center text-[#64748B] text-sm">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="border-none bg-transparent p-0 text-[#00A63E] text-sm font-semibold cursor-pointer">
            Login
          </button>
        </p>
      </div>
    </main>
  );
}
export default SignIn;