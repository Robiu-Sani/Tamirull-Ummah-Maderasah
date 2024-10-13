import {
  FaBook,
  FaChalkboardTeacher,
  FaQuran,
  FaUserGraduate,
  FaMicroscope,
  FaLaptop,
  FaLanguage,
  FaHandsHelping,
} from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      icon: FaBook,
      name: "Islamic Studies",
      title: "In-depth Quran & Hadith Lessons",
    },
    {
      icon: FaChalkboardTeacher,
      name: "Qualified Teachers",
      title: "Expert Scholars in Islamic Education",
    },
    {
      icon: FaQuran,
      name: "Quran Memorization",
      title: "Hifz Program for Students",
    },
    {
      icon: FaUserGraduate,
      name: "Graduation Programs",
      title: "Completion Certificates for Graduates",
    },
    {
      icon: FaMicroscope,
      name: "Science Education",
      title: "Integrated Modern Science Subjects",
    },
    {
      icon: FaLaptop,
      name: "Digital Learning",
      title: "Online Classes & Resources",
    },
    {
      icon: FaLanguage,
      name: "Language Programs",
      title: "Arabic, English & More Languages",
    },
    {
      icon: FaHandsHelping,
      name: "Community Services",
      title: "Serving the Local & Global Muslim Community",
    },
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto py-10 px-2">
        <h1 className="text-4xl font-bold text-center mb-6">Our Services</h1>
        <p className="text-center mb-10 text-lg">
          Explore the range of educational services we offer at Alya Madrasah.
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 border  shadow-md flex flex-col items-center text-center bg-white hover:bg-gray-100 transition duration-300"
            >
              <service.icon className="text-5xl text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
              <p className="text-lg text-gray-600">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
