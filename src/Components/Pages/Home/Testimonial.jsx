import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonial() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            What Our Students Say
          </h2>
          <p className="text-gray-600 mt-2">
            Hear from our students about their experiences at Tamirul Ummah
            Madrasah.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Student 1"
                className="w-16 h-16 rounded-full border-2 border-green-600 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Ahmed Ali
                </h3>
                <p className="text-sm text-gray-600">Alumni</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              <FaQuoteLeft className="inline text-green-500 mr-2" />
              The madrasah has been a life-changing experience for me. The
              education and environment are unmatched, and I am forever grateful
              for the support.
            </p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Student 2"
                className="w-16 h-16 rounded-full border-2 border-green-600 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Fatima Noor
                </h3>
                <p className="text-sm text-gray-600">Current Student</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              <FaQuoteLeft className="inline text-green-500 mr-2" />
              Tamirul Ummah Madrasah has helped me grow academically and
              spiritually. The teachers are wonderful, and the community is like
              family.
            </p>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Student 3"
                className="w-16 h-16 rounded-full border-2 border-green-600 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Mohammad Hassan
                </h3>
                <p className="text-sm text-gray-600">Graduate</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              <FaQuoteLeft className="inline text-green-500 mr-2" />
              The madrasah instilled values in me that I carry with pride today.
              It’s more than just education, it’s a journey of personal and
              spiritual growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
