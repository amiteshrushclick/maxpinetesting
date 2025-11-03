import { Home, Search, ArrowLeft } from 'lucide-react';

export default function Page_404() {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#20ae9b] mb-4 animate-pulse">
            404
          </h1>
          <div className="flex justify-center mb-6">
            <Search className="w-16 h-16 text-[#46bcac] animate-bounce" />
          </div>
        </div>

        {/* Error Message */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Page Not Available
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-500 mb-8">
            Don't worry, it happens to the best of us. Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGoBack}
              className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
            <button
              onClick={handleGoHome}
              className="flex items-center justify-center gap-2 bg-[#20ae9b] hover:bg-[#129180] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </button>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="text-gray-600">
          <p className="mb-2">You might want to try:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/" className="text-[#20ae9b] hover:text-[#158879] underline">
              Home
            </a>
            <a href="/about" className="text-[#20ae9b] hover:text-[#118a7a] underline">
              About Us
            </a>
            <a href="/contact" className="text-[#20ae9b] hover:text-[#128879] underline">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}