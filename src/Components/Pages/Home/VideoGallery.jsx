import { FaYoutube } from "react-icons/fa";

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/-EE_0qtBXps?si=yIiiBhK9862Gc8kg",
    title: "Islamic Lecture 1",
    speaker: "Speaker 1",
    date: "September 1, 2024",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/example_video_2",
    title: "Islamic Lecture 2",
    speaker: "Speaker 2",
    date: "August 15, 2024",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/example_video_3",
    title: "Islamic Lecture 3",
    speaker: "Speaker 3",
    date: "July 20, 2024",
  },
];

export default function VideoGallery() {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Islamic Video Gallery
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Explore our collection of enlightening Islamic lectures and events.
            Watch and learn from a variety of knowledgeable speakers.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative bg-white rounded-lg shadow-md p-4 border border-gray-200"
            >
              {/* Video Embed */}
              <iframe
                className="w-full h-56 rounded-md"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Video Info */}
              <div className="mt-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FaYoutube className="text-red-600" /> {video.title}
                </h3>
                <p className="text-gray-500">
                  <strong>Speaker:</strong> {video.speaker}
                </p>
                <p className="text-gray-500">
                  <strong>Date:</strong> {video.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Videos Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300">
            View All Videos
          </button>
        </div>
      </div>
    </div>
  );
}
