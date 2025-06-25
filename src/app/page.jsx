import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold">Welcome to Neighbourly</h1>
      <p className="text-lg mt-4">Give what you can. Take what you need.</p>
      <div className="mt-6 space-x-4">
        <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </Link>
        <Link
          href="/register"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Sign Up
        </Link>
        <Link
          href="/dashboard"
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Continue as Guest
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
