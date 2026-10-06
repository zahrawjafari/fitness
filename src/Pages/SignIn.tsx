import { FormEvent, useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router";
import api from "../services/api";
function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const response = await api.get("/users");
      const users = response.data;
      const user = users.find(
        (item: {
          email: string;
          password: string;
        }) =>
          item.email === email &&
          item.password === password
      );
      if (!user) {
        setError("Email or password is incorrect.");
        return;
      }
      navigate("/home");
    } catch (error) {
      console.log("Login error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-[400px] mx-auto">
        <div className="mb-8">
          <h1 className="m-0 text-[#0F172B] text-[28px] font-bold">
            Login
          </h1>
          <p className="m-0 mt-2 text-[#64748B] text-sm">
            Please enter your details to login.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-[#0F172B] text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"/>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-12 box-border border-2 border-gray-300 rounded-lg bg-white pl-12 pr-4 text-[#0F172B] text-sm outline-none focus:border-[#00A63E]"/>
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-[#0F172B] text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"/>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full h-12 box-border border-2 border-gray-300 rounded-lg bg-white pl-12 pr-12 text-[#0F172B] text-sm outline-none focus:border-[#00A63E]"/>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] cursor-pointer">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full h-12 border-2 border-[#00A63E] rounded-lg bg-[#00A63E] text-white text-sm font-semibold cursor-pointer hover:bg-green-600 transition">
            Login
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-[#64748B] text-sm">
            Don't have an account?{" "}
            <Link
              to="/"
              className="text-[#00A63E] text-sm font-semibold cursor-pointer hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
export default SignIn;