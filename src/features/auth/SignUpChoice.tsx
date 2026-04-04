// features/auth/SignUpChoice.tsx

export default function SignUpChoice() {
  return (
    <div className="max-w-md mx-auto mt-20 text-center space-y-6">
      <h1 className="text-2xl font-bold">Create a NewsHorizon Account</h1>
      <a
        href="/auth/signup/reader"
        className="block bg-gray-200 p-4 rounded font-medium"
      >
        I am a Reader
      </a>
      <a
        href="/auth/signup/writer"
        className="block bg-black text-white p-4 rounded font-medium"
      >
        I am a Writer
      </a>
    </div>
  );
}
