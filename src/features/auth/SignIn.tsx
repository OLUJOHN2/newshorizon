// src/features/auth/SignIn.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

export default function SignIn() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    // Mock login — role must match the User type
    const mockUser: { name: string; email: string; role: "writer" | "reader" } = {
      name: "Jane Doe",
      email,
      role: "writer",
    };
    login(mockUser);
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm border p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1 font-serif">
          Sign in to NewsHorizon
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Welcome back — good to see you again.
        </p>

        {error && (
          <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-md px-3 py-2 mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="border border-gray-300 w-full px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-red-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="border border-gray-300 w-full px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-red-400"
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white w-full py-2.5 rounded-lg text-sm font-semibold transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-500">
          No account?{" "}
          <Link
            to="/auth/signup"
            className="text-red-500 font-semibold no-underline hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}