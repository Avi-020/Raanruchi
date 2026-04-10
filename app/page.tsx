import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-100 to-orange-300">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-orange-900 mb-4">
          Raanruchi Café ☕
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-6">
          स्वाद जो दिल में बस जाए ❤️
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-orange-800 mb-4">
          Coming Soon 🚀
        </h2>

        <p className="text-gray-600 mb-8">
          We’re brewing something special for you. Stay tuned!
        </p>

        <div className="flex justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
          />
          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
            Notify Me
          </button>
        </div>
      </div>
    </main>
  );
}
