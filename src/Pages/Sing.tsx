import { User, Mail, LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router";
function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2">Create Account</h1>
        <p className="text-gray-500 text-center mb-8">
          Sign up to start your fitness journey
        </p>
        <div className="space-y-4">
          <div className="flex items-center border rounded-lg px-4 py-3">
            <User className="text-gray-400 mr-3" size={20} />
            <input
              type="text"
              placeholder="Username"
              className="outline-none w-full"/>
          </div>
          <div className="flex items-center border rounded-lg px-4 py-3">
            <Mail className="text-gray-400 mr-3" size={20} />
            <input
              type="email"
              placeholder="Email"
              className="outline-none w-full"/>
          </div>
          <div className="flex items-center border rounded-lg px-4 py-3">
            <LockKeyhole className="text-gray-400 mr-3" size={20} />
            <input
              type="password"
              placeholder="Password"
              className="outline-none w-full"/>
          </div>
          <button
            onClick={() => navigate("/fittrack")}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
