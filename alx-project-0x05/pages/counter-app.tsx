import { useState } from 'react';
import { useRouter }  from 'next/navigation';
import { useCount } from '@/context/CountContext';

const CounterApp: React.FC = () => {
  const { count, increment, decrement } = useCount();
  const router = useRouter();

  

  

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-600  flex flex-col justify-center items-center text-white">
      {/* Title */}
      <h1 className="text-6xl font-extrabold mb-6">🤖 Fun Counter App 🎉</h1>

      {/* Funny message */}
      <p className="text-lg font-medium mb-4">
        Current count: {count} {count === 0 ? "🙈 No clicks yet!" : count % 10 === 0 && count !== 0 ? "🔥 You're on fire!" : ""}
      </p>

      {/* Counter Display */}
      <div className="flex justify-center">
            <div className="bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center text-center rounded-2xl mb-6 p-6 sm:p-8 shadow-lg w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40">
                <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
                {count}
                </span>
            </div>
      </div>

      

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
        >
          Increment 🚀
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
        >
          Decrement 👎
        </button>

        <button
          onClick={() => router.push('/')}
          className="bg-black hover:bg-black/50 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
        >
          Back Home
        </button>
      </div>

      {/* Footer message */}
      <p className="mt-8 text-sm text-white opacity-75">
        Keep clicking, who knows what happens at 100? 😏
      </p>
    </div>
  );
}

export default CounterApp;
