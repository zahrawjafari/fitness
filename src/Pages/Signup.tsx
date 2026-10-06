import { FormEvent, useState } from "react";
import { AtSign, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router";
import api from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !email || !password) {
      return;
    }

    try {
      await api.post("/users", {
        username: username,
        email: email,
        password: password,
      });

      navigate("/");
    } catch (error) {
      console.log("Signup error:", error);
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-[400px] mx-auto">
        <div className="mb-8">
          <h1 className="m-0 text-[#0F172B] text-[28px] font-bold">
            Sign up
          </h1>

          <p className="m-0 mt-2 text-[#64748B] text-sm">
            Please enter your details to create an account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-[#0F172B] text-sm font-medium"
            >
              Username
            </label>

            <div className="relative">
              <AtSign
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
              />

              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full h-12 box-border border-2 border-gray-300 rounded-lg bg-white pl-12 pr-4 text-[#0F172B] text-sm outline-none focus:border-[#00A63E]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-[#0F172B] text-sm font-medium"
            >
              Email
            </label>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
              />

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-12 box-border border-2 border-gray-300 rounded-lg bg-white pl-12 pr-4 text-[#0F172B] text-sm outline-none focus:border-[#00A63E]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-[#0F172B] text-sm font-medium"
            >
              Password
            </label>

            <div className="relative">
              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
              />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full h-12 box-border border-2 border-gray-300 rounded-lg bg-white pl-12 pr-12 text-[#0F172B] text-sm outline-none focus:border-[#00A63E]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] cursor-pointer"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-12 border-2 border-[#00A63E] rounded-lg bg-[#00A63E] text-white text-sm font-semibold cursor-pointer hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-[#64748B] text-sm">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-[#00A63E] text-sm font-semibold cursor-pointer hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Signup;