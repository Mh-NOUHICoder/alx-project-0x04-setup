import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:flex-row md:gap-16 bg-black text-gray-100">
      {/* Left: Image */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
        <Image
          src="/assets/404-scarecrow.png"
          alt="404 Scarecrow"
          width={500}
          height={500}
          className="w-72 md:w-[500px] object-contain drop-shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]"
          priority
        />
      </div>

      {/* Right: Content */}
      <div className="mt-10 md:mt-0 md:w-1/2 text-center md:text-left max-w-lg">
        <h1 className="text-6xl font-bold mb-4">Oops! 😱</h1>
        <p className="text-2xl mb-8">
          We can't seem to find the page you're looking for.
        </p>

        <p className="text-lg mb-8 text-center max-w-md">
        Maybe it was abducted by aliens 👽, or it just took a wrong turn into the Internet wilderness! Either way, it's not here.
      </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400/40"
            aria-label="Back to homepage"
          >
            <FaArrowLeft className="text-white" />
            Back to homepage
          </Link>

          {/* secondary action (optional) */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-700 text-gray-200 hover:bg-white/5 transition"
          >
            Contact Support
          </Link>
        </div>

        <div className="pt-6 text-gray-400 text-sm italic">
          <p>Lost? Happens to the best of us. 🌍</p>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
