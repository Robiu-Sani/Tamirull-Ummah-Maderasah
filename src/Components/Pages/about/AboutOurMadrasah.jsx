import {
  FaBook,
  FaMosque,
  FaUserGraduate,
  FaHandsHelping,
  FaGlobe,
} from "react-icons/fa";

export default function AboutOurMadrasah() {
  return (
    <div className="w-full py-16 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800">
            About Our Madrasah
          </h2>
          <p className="text-gray-600 mt-4 max-w-4xl mx-auto leading-relaxed">
            Our madrasah stands as a beacon of both traditional Islamic
            education and modern academic instruction, aiming to nurture young
            minds who are well-versed in religious knowledge while equipped with
            the tools to navigate the complexities of the modern world. Since
            our inception, we have continuously evolved to meet the changing
            demands of the world while staying firmly rooted in our Islamic
            principles.
          </p>
        </div>

        {/* Info Sections */}
        <div className="space-y-10 text-lg leading-relaxed text-gray-600">
          {/* Block 1: History and Foundation */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Our History and Foundation
            </h3>
            <p className="text-sm">
              Our madrasah was founded in 2003 with the goal of providing
              holistic Islamic education in an environment that fosters both
              spiritual and academic growth. Starting with just a handful of
              students, our institution has grown significantly over the years.
              The foundation was laid by a group of visionary scholars and
              community leaders who recognized the need for a balanced education
              model—one that merges the rich heritage of Islamic studies with
              the demands of contemporary education.
            </p>
            <p className="mt-4 text-sm">
              In the early years, we focused solely on religious subjects,
              teaching Quranic memorization, Tafsir, Hadith, Fiqh, and other
              Islamic sciences. Over time, recognizing the growing importance of
              modern education, we expanded our curriculum to include subjects
              such as Mathematics, Science, Literature, and Social Studies,
              ensuring that our students graduate with a well-rounded education.
              Today, we are proud to be recognized as one of the leading
              madrasahs, where hundreds of students are enrolled, pursuing both
              Islamic and academic excellence.
            </p>
          </div>

          {/* Block 2: Mission and Vision */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Our Mission and Vision
            </h3>
            <p className="text-sm">
              Our mission is simple yet profound: to provide an environment
              where students can thrive spiritually, academically, and socially.
              We aim to cultivate a deep understanding of Islamic values in our
              students while ensuring they are well-prepared for the challenges
              of the modern world. Our students learn to see the world through
              the lens of Islamic teachings, balancing their faith with the
              knowledge they acquire through modern subjects.
            </p>
            <p className="mt-4 text-sm">
              Our vision is to become a global center of excellence in Islamic
              and modern education. We aspire to be a place where students from
              around the world can come to learn, grow, and contribute to their
              communities, guided by the timeless teachings of Islam and the
              ever-evolving landscape of global education. We believe that
              education is the key to a better future, and by investing in the
              minds and hearts of the next generation, we can help build a world
              that reflects the best of both Islamic and modern values.
            </p>
          </div>

          {/* Block 3: Core Islamic Education */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Core Islamic Education
            </h3>
            <p className="text-sm">
              At the heart of our madrasah is the belief that Islamic education
              should be a lifelong journey, one that begins at a young age and
              continues throughout one's life. Our curriculum emphasizes Quranic
              studies, Hadith, Fiqh, and the rich traditions of Islamic
              scholarship to build a solid foundation for our students. We
              believe that a strong understanding of the Quran and the teachings
              of the Prophet Muhammad (peace be upon him) is essential for
              developing moral character and spiritual resilience in the face of
              life's challenges.
            </p>
            <p className="mt-4 text-sm">
              Our students are encouraged to engage deeply with the Quran, not
              just through memorization but through thoughtful reflection and
              understanding of its meanings. We also place a strong emphasis on
              the study of Hadith, Fiqh, and other Islamic sciences to ensure
              our students have a comprehensive understanding of their faith.
            </p>
          </div>

          {/* Block 4: Academic Excellence */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Academic Excellence
            </h3>
            <p className="text-sm">
              While our focus on Islamic studies is central to our mission, we
              understand that modern academic education is equally important.
              Our madrasah offers a comprehensive academic curriculum that
              includes Mathematics, Science, Literature, and Social Studies, all
              taught by qualified instructors who are experts in their fields.
              We believe that by combining the best of Islamic and modern
              education, we are preparing our students to be well-rounded
              individuals who can succeed in all areas of life.
            </p>
            <p className="mt-4 text-sm">
              Our academic program is designed to challenge students and help
              them develop critical thinking skills, problem-solving abilities,
              and a love for lifelong learning. Whether our students choose to
              pursue careers in science, technology, business, or any other
              field, we are confident that they will be prepared for success,
              grounded in the values of their faith.
            </p>
          </div>

          {/* Block 5: Community Service and Leadership */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Community Service and Leadership
            </h3>
            <p className="text-sm">
              In addition to academic and spiritual development, we place a
              strong emphasis on community service and leadership. We believe
              that education should not only benefit the individual but also the
              community. Our students are encouraged to engage in acts of
              service, whether it be through volunteering, charity work, or
              simply helping their peers. We aim to develop leaders who are
              compassionate, empathetic, and dedicated to making a positive
              impact in the world.
            </p>
            <p className="mt-4 text-sm">
              Many of our graduates go on to become leaders in their
              communities, contributing not just to the growth of the Muslim
              Ummah but to society as a whole. We instill in our students the
              importance of giving back and serving others, helping them develop
              the skills and character traits needed to be effective and ethical
              leaders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
