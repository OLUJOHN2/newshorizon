// src/features/auth/SignUpWriter.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

export default function SignUpWriter() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    field: "",
    niche: "",
    experience: "",
    portfolio: "",
    bio: "",
    country: "",
    languages: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const user: { name: string; email: string; role: "writer" | "reader" } = {
      name: form.name,
      email: form.email,
      role: "writer",
    };
    login(user);
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-sm border p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1 font-serif">
          Become a Writer on NewsHorizon
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Share your expertise with the world.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic info */}
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
                value={form[name as keyof typeof form] as string}
                onChange={handleChange}
                placeholder={placeholder}
                className="border border-gray-300 w-full px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-red-400"
              />
            </div>
          ))}

          <hr className="my-2" />

          {/* Writer-specific */}
          {[
            {
              label: "Field of Study",
              name: "field",
              type: "text",
              placeholder: "e.g. Journalism, Economics",
            },
            {
              label: "Writing Niche",
              name: "niche",
              type: "text",
              placeholder: "e.g. Finance, Tech, Politics",
            },
            {
              label: "Years of Experience",
              name: "experience",
              type: "number",
              placeholder: "e.g. 3",
            },
            {
              label: "Portfolio URL",
              name: "portfolio",
              type: "url",
              placeholder: "https://yourportfolio.com",
            },
            {
              label: "Country",
              name: "country",
              type: "text",
              placeholder: "e.g. Nigeria",
            },
            {
              label: "Languages",
              name: "languages",
              type: "text",
              placeholder: "e.g. English, French",
            },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={form[name as keyof typeof form] as string}
                onChange={handleChange}
                placeholder={placeholder}
                className="border border-gray-300 w-full px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-red-400"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Proof of Study
            </label>
            <input
              type="file"
              accept="image/*,.pdf"
              className="border border-gray-300 w-full px-3 py-2 rounded-lg text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Short Bio / Expertise
            </label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Tell readers about yourself (max 200 characters)"
              maxLength={200}
              rows={3}
              className="border border-gray-300 w-full px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-red-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white w-full py-2.5 rounded-lg text-sm font-semibold transition"
          >
            Apply as Writer
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
