import { FaGraduationCap, FaChalkboardTeacher, FaLeaf } from "react-icons/fa";

export default function NurturingScholars() {
  return (
    <div className="w-full py-16 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Nurturing Scholars
          </h2>
          <p className="text-gray-600 mt-4">
            Fostering the next generation of scholars with a balance of academic
            and spiritual growth.
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1: Academic Excellence */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaGraduationCap size={30} className="text-blue-500" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Academic Excellence
              </h3>
            </div>
            <p className="text-gray-600">
              Our madrasah is committed to nurturing scholars who excel in both
              Islamic and modern academic disciplines, preparing them for the
              challenges of tomorrow.
            </p>
          </div>

          {/* Card 2: Expert Guidance */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaChalkboardTeacher size={30} className="text-green-500" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Expert Guidance
              </h3>
            </div>
            <p className="text-gray-600">
              Under the guidance of experienced scholars and educators, students
              are equipped with the knowledge and wisdom needed to succeed in
              both religious and worldly affairs.
            </p>
          </div>

          {/* Card 3: Character Building */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaLeaf size={30} className="text-yellow-500" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Character Building
              </h3>
            </div>
            <p className="text-gray-600">
              Our holistic approach to education emphasizes moral and ethical
              development, ensuring students grow into compassionate and
              responsible individuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
