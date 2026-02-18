import { Link } from "react-router-dom";
import { FiCheckCircle, FiHeart, FiUsers, FiAward } from "react-icons/fi";

const stats = [
  { value: "10+", label: "Years of Service" },
  { value: "15K+", label: "Patients Treated" },
  { value: "8+", label: "Specialist Doctors" },
  { value: "20+", label: "Medical Services" },
];

const values = [
  {
    icon: <FiHeart size={24} />,
    title: "Compassion",
    desc: "We treat every patient with empathy, kindness, and respect.",
  },
  {
    icon: <FiAward size={24} />,
    title: "Excellence",
    desc: "Committed to the highest standards of medical practice and patient care.",
  },
  {
    icon: <FiUsers size={24} />,
    title: "Community",
    desc: "Proudly serving the Karachi community with accessible and affordable healthcare.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold text-secondary-800 font-heading sm:text-5xl">
              About{" "}
              <span className="text-primary-500">Dr. Zia Medical Clinic</span>
            </h1>
            <p className="mt-4 text-lg text-secondary-400">
              For over a decade, Dr. Zia Medical Clinic has been a trusted name
              in healthcare in Karachi — delivering quality medical services
              with compassion and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 lg:flex-row lg:px-8">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=450&fit=crop"
              alt="Dr. Zia Medical Clinic facility"
              className="rounded-2xl shadow-lg w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-secondary-800 font-heading">
              Our <span className="text-primary-500">Story</span>
            </h2>
            <p className="mt-4 leading-relaxed text-secondary-500">
              Founded with a mission to provide accessible, high-quality
              healthcare to the people of Karachi, Dr. Zia Medical Clinic has
              grown from a small family practice into a comprehensive medical
              facility.
            </p>
            <p className="mt-3 leading-relaxed text-secondary-500">
              Our team of experienced doctors and caring staff work together to
              deliver personalized treatment in a warm and welcoming
              environment. We believe that quality healthcare should be
              available to everyone, and we strive to make every visit
              comfortable and effective.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Qualified & experienced medical professionals",
                "State-of-the-art diagnostic equipment",
                "Patient-centered approach to care",
                "Affordable and transparent pricing",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-secondary-600"
                >
                  <FiCheckCircle className="text-primary-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-500 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-white font-heading">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-primary-100">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-secondary-800 font-heading sm:text-4xl">
            Our <span className="text-primary-500">Values</span>
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                  {v.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 font-heading">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-secondary-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-800 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white font-heading">
            Experience the Dr. Zia Medical Clinic Difference
          </h2>
          <p className="mt-4 text-secondary-200">
            Schedule an appointment today and let our team take care of your
            health.
          </p>
          <Link
            to="/appointment"
            className="mt-8 inline-block rounded-lg bg-primary-500 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary-600 transition-colors no-underline"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
