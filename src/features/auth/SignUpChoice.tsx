// src/features/auth/SignUpChoice.tsx
import { Link } from "react-router-dom";
import { PenLine, BookOpen } from "lucide-react";

export default function SignUpChoice() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm border p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1 font-serif">
          Create a NewsHub Account
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Choose how you'd like to use NewsHub.
        </p>

        <div className="space-y-4">
          <Link
            to="/auth/signup/reader"
            className="flex items-center gap-4 border border-gray-200 rounded-xl p-5 hover:border-red-400 hover:bg-red-50 transition group no-underline"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-red-100 flex items-center justify-center transition">
              <BookOpen className="w-5 h-5 text-gray-600 group-hover:text-red-500" />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm">
                I am a Reader
              </p>
              <p className="text-xs text-gray-500">Browse and save articles</p>
            </div>
          </Link>

          <Link
            to="/auth/signup/writer"
            className="flex items-center gap-4 border border-gray-200 rounded-xl p-5 hover:border-red-400 hover:bg-red-50 transition group no-underline"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-red-100 flex items-center justify-center transition">
              <PenLine className="w-5 h-5 text-gray-600 group-hover:text-red-500" />
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-sm">
                I am a Writer
              </p>
              <p className="text-xs text-gray-500">
                Publish articles and grow your audience
              </p>
            </div>
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
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
