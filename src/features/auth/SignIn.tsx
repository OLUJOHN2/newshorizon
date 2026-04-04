// features/auth/SignIn.tsx
export default function SignIn() {
  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Sign in to NewsHorizon</h1>

      <form className="space-y-4">
        <input className="border w-full p-2 rounded" placeholder="Email" />
        <input
          className="border w-full p-2 rounded"
          type="password"
          placeholder="Password"
        />

        <button className="bg-black text-white w-full p-2 rounded">
          Sign In
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        No account?{" "}
        <a href="/auth/signup" className="text-blue-600">
          Sign up
        </a>
      </p>
    </div>
  );
}
