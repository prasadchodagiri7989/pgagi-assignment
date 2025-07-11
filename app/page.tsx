'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          🚀 Welcome to Your Personalized Content Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Stay ahead with curated content tailored to your interests. Easily toggle themes, customize categories, and enjoy a distraction-free reading experience.
        </p>
        <Link href="/dashboard">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </main>
  );
}
