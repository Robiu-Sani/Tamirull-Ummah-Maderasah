import {
  FaPray,
  FaBookReader,
  FaBasketballBall,
  FaCalendarAlt,
} from "react-icons/fa";
import image1 from "../../../images/studentPlaying.jpg";
import image2 from "../../../images/styding.jpg";
import image3 from "../../../images/sports.jpg";

export default function StudentLifeSection() {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Student Life
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Explore the vibrant and spiritual life of students at our madrasah.
            Balancing studies, extracurricular activities, and spiritual growth.
          </p>
        </div>

        {/* Student Life Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Spiritual Development */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaPray size={24} className="text-green-500" />
              Spiritual Development
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Students engage in daily prayers, Quran recitation, and Islamic
              studies to nurture their spiritual growth and connection to faith.
            </p>
            <img
              src={image1}
              alt="Students Praying"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>

          {/* Academic Life */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaBookReader size={24} className="text-blue-500" />
              Academic Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our rigorous academic curriculum prepares students with both
              Islamic knowledge and contemporary subjects like math, science,
              and literature.
            </p>
            <img
              src={image2}
              alt="Students Studying"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>

          {/* Extracurricular Activities */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaBasketballBall size={24} className="text-orange-500" />
              Extracurricular Activities
            </h3>
            <p className="text-gray-600  leading-relaxed mb-4">
              Students participate in various activities like sports, arts, and
              debates, helping them develop important life skills and teamwork.
            </p>
            <img
              src={image3}
              alt="Students Playing Sports"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Daily Routine */}
        <div className="w-full mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaCalendarAlt size={24} className="text-purple-500" />A Day in
              the Life
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Students follow a well-structured daily routine that balances
              prayer, study, extracurriculars, and personal development time.
              This fosters a sense of discipline and spiritual enrichment.
            </p>
            <img
              src={image1}
              alt="Daily Routine"
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
