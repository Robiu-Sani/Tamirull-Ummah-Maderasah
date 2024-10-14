import { FaGraduationCap, FaBook, FaMosque } from "react-icons/fa";

export default function OurLegacy() {
  return (
    <div className="w-full py-10 ">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Legacy</h2>
          <p className="text-gray-600 mt-2">
            The journey of knowledge and faith at Alia Madrasah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Image */}
          <div className="w-full">
            <img
              src="https://elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg"
              alt="Madrasah Legacy"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaGraduationCap size={40} className="text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Excellence in Education
                </h3>
                <p className="text-gray-600">
                  Alia Madrasah has been dedicated to providing top-quality
                  Islamic education since its inception. Our graduates excel in
                  both religious and contemporary knowledge, preparing them for
                  success in this life and the hereafter.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaBook size={40} className="text-green-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Comprehensive Curriculum
                </h3>
                <p className="text-gray-600">
                  Our curriculum is designed to create a balanced approach to
                  Islamic studies and modern education. We focus on both the
                  spiritual and intellectual growth of our students.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMosque size={40} className="text-yellow-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Fostering Faith and Community
                </h3>
                <p className="text-gray-600">
                  Our madrasah is not just a place of learning; it's a community
                  where students develop strong Islamic values, character, and a
                  deep connection to their faith.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
