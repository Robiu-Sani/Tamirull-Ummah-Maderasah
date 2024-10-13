import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Grid for Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Madrasah Name */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-2">Tamirul Ummah Madrasah</h2>
            <p className="text-gray-200 text-sm">
              A Leading Islamic Institution Focused on Academic and Religious
              Excellence.
            </p>
            <img
              src="https://via.placeholder.com/150x100.png?text=Madrasah+Logo"
              alt="Madrasah Logo"
              className="w-32 mt-4 rounded-md shadow-md"
            />
          </div>

          {/* Shortcuts / Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Shortcuts</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#admission"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Admission
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Events & Activities
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-300 transition duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#library"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Library
                </a>
              </li>
              <li>
                <a
                  href="#online-learning"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Online Learning
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="hover:text-gray-300 transition duration-200"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-800 rounded-full hover:bg-green-900 transition duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-800 rounded-full hover:bg-green-900 transition duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-800 rounded-full hover:bg-green-900 transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-800 rounded-full hover:bg-green-900 transition duration-300"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
          <p>&copy; 2024 Tamirul Ummah Madrasah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
