import { FaLightbulb, FaBookOpen, FaCompass } from "react-icons/fa";

export default function PathToKnowledge() {
  return (
    <div className="w-full py-12 ">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Path to Knowledge
          </h2>
          <p className="text-gray-600 mt-3">
            Guiding our students through a journey of faith and learning,
            blending tradition and modernity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Right Side: Image */}
          <div className="w-full">
            <img
              src="https://elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg"
              alt="Path to Knowledge"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
          {/* Left Side: Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaLightbulb size={40} className="text-yellow-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Enlightening Minds
                </h3>
                <p className="text-gray-600">
                  At Alia Madrasah, we cultivate a love for learning by
                  combining Islamic wisdom with contemporary knowledge,
                  inspiring students to think critically and live purposefully.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaBookOpen size={40} className="text-blue-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Holistic Curriculum
                </h3>
                <p className="text-gray-600">
                  Our curriculum offers an integrated approach to Islamic
                  studies and modern education, ensuring that students are
                  well-equipped for the challenges of both worlds.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaCompass size={40} className="text-green-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  A Guided Journey
                </h3>
                <p className="text-gray-600">
                  We believe in guiding each student on their own unique journey
                  of knowledge, fostering both intellectual curiosity and
                  spiritual growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
