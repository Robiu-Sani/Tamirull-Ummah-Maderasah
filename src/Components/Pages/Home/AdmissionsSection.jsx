import {
  AiOutlineFileText,
  AiOutlineUserAdd,
  AiOutlineCheck,
  AiOutlineBook,
  AiOutlineSchedule,
} from "react-icons/ai";

export default function AdmissionsSection() {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Admissions</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to our madrasah! Learn about the admission process,
            requirements, and how to apply for your child’s future.
          </p>
        </div>

        {/* Admission Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Admission Process */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <AiOutlineFileText size={24} />
              Admission Process
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li className="flex items-center gap-2">
                <AiOutlineCheck className="text-green-500" />
                Fill out the online application form.
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineBook className="text-blue-500" />
                Submit required documents (birth certificate, previous school
                records).
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineSchedule className="text-yellow-500" />
                Attend an interview or entrance exam.
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineCheck className="text-green-500" />
                Receive admission decision within 5-7 business days.
              </li>
            </ul>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
              Apply Now
            </button>
          </div>

          {/* Eligibility */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <AiOutlineUserAdd size={24} />
              Eligibility Criteria
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li className="flex items-center gap-2">
                <AiOutlineCheck className="text-green-500" />
                Students must be aged between 5-18 years old.
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineBook className="text-blue-500" />
                Applicants should have a basic understanding of the Quran and
                Islamic studies.
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineCheck className="text-green-500" />
                Must meet the academic and behavioral standards of the madrasah.
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineSchedule className="text-yellow-500" />
                Pass the entrance exam or interview.
              </li>
            </ul>
            <p className="text-gray-500">
              For more information, please contact our admissions office.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
