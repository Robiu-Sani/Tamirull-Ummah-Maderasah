import { AiTwotoneAlert } from "react-icons/ai";

export default function AboutSection() {
  return (
    <div className="w-full py-10">
      <div className="container mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="col-span-1 md:col-span-2">
          <div className="w-full pb-10 relative">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_Sr_Bp2FoH1BeeDy_tVMPPlOdcgFvNXtpcp_hyphenhyphenqDK30_fOHjy927q9fvsbh7vi_FCSHbwgHs_-v3_H8mhlywEdEdX6SF6LCgy9B-ayde4kyxLCdOsbVJzxQr6umbJpjaFdJnYhisz7-LK/s1600/DSC_0073-123456.jpg"
              alt="maderasah image"
              className="w-[80%] sm:w-1/2 rounded-md shadow-md"
            />
            <div className="w-[80%] sm:w-[60%] p-5 absolute top-5 right-0 z-10 bg-white rounded-md shadow-lg border border-gray-200">
              <h2 className="text-xl font-bold mb-4">About Us</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ta`mirul Ummah Madrasah is a prestigious Islamic institution
                established in 2003, aimed at providing a high-quality education
                in Islamic studies alongside contemporary knowledge. The
                madrasah has been a pioneer in nurturing students with a
                balanced approach to both religious and worldly affairs. Over
                the years, it has become a center for excellence, shaping future
                leaders grounded in strong ethical and...
              </p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                Read More...
              </button>
            </div>
          </div>
        </div>

        <div className="w-full col-span-1 p-2 mt-10 sm:mt-0">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full p-2 rounded-md shadow-md border">
              <h3 className="text-2xl font-bold text-center">Notice Board</h3>
            </div>

            {/* Notice items */}
            {["Notice 1", "Notice 2", "Notice 3"].map((notice, index) => (
              <div
                key={index}
                className="w-full cursor-pointer rounded-md shadow-md hover:bg-gray-100 transition-all"
              >
                <div className="w-full p-3 flex justify-between items-center gap-4">
                  <div className="w-[50px] h-[50px] border rounded-md flex justify-center items-center">
                    <AiTwotoneAlert size={30} />
                  </div>
                  <div className="w-full">
                    <h5 className="text-xl font-bold">{notice}</h5>
                    <hr />
                    <p>20 - 31 - 2024</p>
                  </div>
                </div>
              </div>
            ))}

            {/* See All Notices button */}
            <div className="w-full cursor-pointer p-3 text-center text-blue-500 font-bold bg-blue-50 hover:bg-blue-100 transition-all rounded-md shadow-md">
              See All Notices
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
