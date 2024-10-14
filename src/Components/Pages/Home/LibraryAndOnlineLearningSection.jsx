import {
  FaBook,
  FaLaptop,
  FaChalkboardTeacher,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import image1 from "../../../images/library.jpeg";
import image2 from "../../../images/online.jpg";

export default function LibraryAndOnlineLearningSection() {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Library & Online Learning
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Explore our vast library resources and online learning platforms
            that provide students with the tools they need for both Islamic and
            contemporary education.
          </p>
        </div>

        {/* Library and Online Learning Sections */}
        <div className="flex flex-col gap-8">
          {/* Library Section */}
          <div className=" p-6  gap-8 flex flex-col sm:flex-row items-center justify-between">
            <img
              src={image1}
              alt="Library Image"
              className="w-full  object-cover rounded-lg mb-4"
            />
            <div className="">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaBook size={24} className="text-green-500" />
                Madrasah Library
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                Our madrasah library houses a comprehensive collection of
                Islamic literature, textbooks, reference books, and journals.
                Students can use these resources to expand their knowledge in
                both religious and academic fields.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Over 5,000 Islamic books and resources.</li>
                <li>Access to digital journals and research materials.</li>
                <li>Quiet study rooms for focused learning.</li>
                <li>Weekly book discussions and study circles.</li>
              </ul>
              <div className="">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                  <AiOutlineFileSearch
                    size={20}
                    className="inline-block mr-2"
                  />
                  Explore Library
                </button>
              </div>
            </div>
          </div>

          {/* Online Learning Section */}
          <div className="p-6  gap-8 flex flex-col sm:flex-row items-center justify-between">
            <div className="">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FaLaptop size={24} className="text-blue-500" />
                Online Learning Platform
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our online learning platform offers a variety of courses on
                Islamic studies, Quranic memorization, and academic subjects. It
                enables students to learn at their own pace with the support of
                experienced instructors.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Interactive Quran recitation and memorization sessions.</li>
                <li>
                  Live and recorded video lectures from renowned scholars.
                </li>
                <li>Online assessments and quizzes.</li>
                <li>Downloadable learning materials and resources.</li>
              </ul>
              <div className="flex items-center gap-4 mt-4 text-gray-600">
                <FaChalkboardTeacher size={24} className="text-gray-600" />
                <span>Live Interactive Classes</span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-gray-600">
                <FaCloudDownloadAlt size={24} className="text-gray-600" />
                <span>Download Study Materials</span>
              </div>
              <div className="">
                <button className="px-4 py-2 mt-6 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
                  <FaCloudDownloadAlt size={20} className="inline-block mr-2" />
                  Start Learning Online
                </button>
              </div>
            </div>

            <img
              src={image2}
              alt="Online Learning"
              className="w-full sm:w-1/2 object-cover rounded-lg mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
