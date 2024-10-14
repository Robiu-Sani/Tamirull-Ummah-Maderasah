import { FaMosque, FaPrayingHands, FaGlobe } from "react-icons/fa";

export default function IslamicJourney() {
  return (
    <div className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Islamic Journey</h2>
          <p className="text-gray-600 mt-3">
            Embark on a spiritual and educational journey that nurtures faith,
            knowledge, and character.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaMosque size={40} className="text-purple-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Spiritual Foundation
                </h3>
                <p className="text-gray-600">
                  Our madrasah builds a strong spiritual foundation through a
                  deep connection to Islamic teachings, focusing on the core
                  values of faith, prayer, and submission to Allah.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPrayingHands size={40} className="text-green-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Building Character
                </h3>
                <p className="text-gray-600">
                  Alongside knowledge, we emphasize the development of moral
                  character, teaching students the importance of integrity,
                  compassion, and humility in their daily lives.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaGlobe size={40} className="text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Global Awareness
                </h3>
                <p className="text-gray-600">
                  We prepare our students to navigate the modern world with a
                  solid understanding of both Islamic values and global
                  perspectives, empowering them to become responsible
                  contributors to society.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full">
            <img
              src="https://elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg"
              alt="Islamic Journey"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
