import { FaChalkboardTeacher, FaQuran, FaUserGraduate } from "react-icons/fa";

export default function MadrasahOverview() {
  return (
    <div className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Madrasah Overview
          </h2>
          <p className="text-gray-600 mt-3">
            Discover the foundations, mission, and educational approach that
            make our madrasah unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaChalkboardTeacher size={40} className="text-purple-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Expert Faculty
                </h3>
                <p className="text-gray-600">
                  Our madrasah is home to highly qualified and experienced
                  teachers who are dedicated to nurturing students’ intellectual
                  and spiritual growth.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaQuran size={40} className="text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Quranic and Hadith Studies
                </h3>
                <p className="text-gray-600">
                  We emphasize the study of the Holy Quran and Hadith, ensuring
                  that our students gain a deep understanding of Islamic
                  teachings and values.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaUserGraduate size={40} className="text-green-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Student Achievement
                </h3>
                <p className="text-gray-600">
                  Our students excel in both Islamic and modern academic fields,
                  equipped with the knowledge and skills to succeed in various
                  walks of life.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full">
            <img
              src="https://elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg"
              alt="Madrasah Overview"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
