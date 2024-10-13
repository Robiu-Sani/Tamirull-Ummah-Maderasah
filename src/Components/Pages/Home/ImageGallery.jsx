import { useState } from "react";
import { FaSearchPlus, FaTimes } from "react-icons/fa";

const images = [
  {
    id: 1,
    src: "https://elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg",
    title: "Islamic Event 1",
    description: "Description of Islamic Event 1.",
  },
  {
    id: 2,
    src: "https://elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg",
    title: "Islamic Event 2",
    description: "Description of Islamic Event 2.",
  },
  {
    id: 3,
    src: "https://elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg",
    title: "Islamic Event 3",
    description: "Description of Islamic Event 3.",
  },
  {
    id: 4,
    src: "https://elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg",
    title: "Islamic Event 4",
    description: "Description of Islamic Event 4.",
  },
  {
    id: 5,
    src: "https://elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg",
    title: "Islamic Event 3",
    description: "Description of Islamic Event 3.",
  },
  {
    id: 6,
    src: "https://elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg",
    title: "Islamic Event 4",
    description: "Description of Islamic Event 4.",
  },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Islamic Events & Activities
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A glimpse of our memorable Islamic events and activities. Click on
            any image to view it in detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="text-white text-2xl p-4 bg-green-500 rounded-full hover:bg-green-600"
                  onClick={() => handleImageClick(image)}
                >
                  <FaSearchPlus />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Image Preview */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full shadow-lg">
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  className="absolute top-4 right-4 text-white text-2xl p-2 bg-red-600 rounded-full"
                  onClick={closeModal}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
