// features/auth/SignUpReader.tsx

export default function SignUpReader() {
  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Create Reader Account</h1>

      <form className="space-y-4">
        <input className="border w-full p-2 rounded" placeholder="Full Name" />
        <input className="border w-full p-2 rounded" placeholder="Email" />
        <input
          className="border w-full p-2 rounded"
          type="password"
          placeholder="Password"
        />

        <button className="bg-black text-white w-full p-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}
