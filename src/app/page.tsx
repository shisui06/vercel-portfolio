import { FlipWordsDemo } from "@/components/flip-word-custom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Custom Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-black p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-6xl font-bold">
          Tamoor.
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/about" className="text-white hover:text-gray-300">About</a>
          <a href="/projects" className="text-white hover:text-gray-300">Projects</a>
          <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
        </div>

        {/* Hire Me Button */}
        <button className="bg-black text-white px-6 py-2 rounded-lg shimmer-button">
          Hire Me
        </button>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        <FlipWordsDemo />
      </div>
    </div>
  );
}
