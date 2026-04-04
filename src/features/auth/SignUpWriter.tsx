// features/auth/SignUpWriter.tsx

export default function SignUpWriter() {
  return (
    <div className="max-w-xl mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">
        Become a Writer on NewsHorizon
      </h1>

      <form className="space-y-4">
        <input className="border w-full p-2 rounded" placeholder="Full Name" />
        <input className="border w-full p-2 rounded" placeholder="Email" />
        <input
          className="border w-full p-2 rounded"
          type="password"
          placeholder="Password"
        />

        <hr className="my-4" />

        <input
          className="border w-full p-2 rounded"
          placeholder="Field of Study (e.g. Journalism, Economics)"
        />
        <input
          className="border w-full p-2 rounded"
          placeholder="Writing Niche (e.g. Finance, Tech, Politics)"
        />
        <input
          className="border w-full p-2 rounded"
          placeholder="Years of Experience"
          type="number"
        />

        <input
          className="border w-full p-2 rounded"
          placeholder="Portfolio URL"
        />

        <div>
          <label className="block mb-2 text-sm font-medium">
            Proof of Study
          </label>
          <input
            type="file"
            accept="image/*,.pdf"
            className="border w-full p-2 rounded"
          />
        </div>

        <textarea
          className="border w-full p-2 rounded"
          placeholder="Short Bio / Expertise (200 chars)"
        ></textarea>

        <input className="border w-full p-2 rounded" placeholder="Country" />
        <input
          className="border w-full p-2 rounded"
          placeholder="Languages (e.g. English, French)"
        />

        <button className="bg-black text-white w-full p-2 rounded">
          Apply as Writer
        </button>
      </form>
    </div>
  );
}
