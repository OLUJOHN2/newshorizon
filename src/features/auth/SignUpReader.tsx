// src/features/auth/SignUpReader.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

export default function SignUpReader() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const user: { name: string; email: string; role: "writer" | "reader" } = {
      name: form.name,
      email: form.email,
      role: "reader",
    };
    login(user);
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm border p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1 font-serif">
          Create Reader Account
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Start reading the stories that matter.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            {
              label: "Full Name",
              name: "name",
              type: "text",
              placeholder: "Jane Doe",
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "you@example.com",
            },
            {
              label: "Password",
              name: "password",
              type: "password",
              placeholder: "••••••••",
            },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={form[name as keyof typeof form]}
                onChange={handleChange}
                placeholder={placeholder}
                className="border border-gray-300 w-full px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-red-400"
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white w-full py-2.5 rounded-lg text-sm font-semibold transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/auth/signin"
            className="text-red-500 font-semibold no-underline hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
