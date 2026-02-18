import { Link } from "react-router-dom";
import {
  FiHeart,
  FiUsers,
  FiShield,
  FiActivity,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";
import {
  FaStethoscope,
  FaBaby,
  FaFemale,
  FaMicroscope,
  FaHeartbeat,
  FaNotesMedical,
} from "react-icons/fa";

const services = [
  {
    icon: <FaStethoscope size={28} />,
    title: "General Consultation",
    desc: "Comprehensive health check-ups and consultations with experienced physicians for all age groups.",
  },
  {
    icon: <FaBaby size={28} />,
    title: "Pediatrics",
    desc: "Specialized care for infants, children and adolescents including vaccinations and development monitoring.",
  },
  {
    icon: <FaFemale size={28} />,
    title: "Gynecology",
    desc: "Complete women's health services including prenatal care, routine screenings, and specialist consultations.",
  },
  {
    icon: <FaHeartbeat size={28} />,
    title: "Cardiology",
    desc: "Heart health assessments, ECG, blood pressure management, and preventive cardiac care.",
  },
  {
    icon: <FaNotesMedical size={28} />,
    title: "Dermatology",
    desc: "Diagnosis and treatment of skin conditions, allergies, and cosmetic dermatology consultations.",
  },
  {
    icon: <FaMicroscope size={28} />,
    title: "Diagnostics & Lab",
    desc: "On-site laboratory services with accurate and quick test results for blood work, imaging, and more.",
  },
];

const whyUs = [
  {
    icon: <FiUsers size={24} />,
    title: "Experienced Doctors",
    desc: "Our team of qualified and experienced medical professionals is committed to your well-being.",
  },
  {
    icon: <FiShield size={24} />,
    title: "Modern Facility",
    desc: "State-of-the-art equipment and a clean, comfortable environment for every patient.",
  },
  {
    icon: <FiHeart size={24} />,
    title: "Patient-Focused Care",
    desc: "We prioritize your comfort and health with personalized attention at every visit.",
  },
  {
    icon: <FiActivity size={24} />,
    title: "Affordable Treatment",
    desc: "Quality healthcare services at fair and transparent pricing for the community.",
  },
];

const doctors = [
  {
    name: "Dr. Ahmed Khan",
    specialty: "General Physician",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Fatima Noor",
    specialty: "Gynecologist",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964f137?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Hassan Ali",
    specialty: "Pediatrician",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
  },
];

const reviews = [
  {
    name: "Ayesha R.",
    text: "Excellent service! The doctors are very professional and caring. Highly recommended for families.",
    stars: 5,
  },
  {
    name: "Imran S.",
    text: "Clean facility, minimal wait time, and the staff is very friendly. My go-to clinic in Karachi.",
    stars: 5,
  },
  {
    name: "Sara M.",
    text: "Dr. Fatima was wonderful during my pregnancy. The care I received was exceptional.",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-4 py-16 lg:flex-row lg:px-8 lg:py-24">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block rounded-full bg-primary-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700">
              Trusted Healthcare in Karachi
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-secondary-800 sm:text-5xl lg:text-6xl font-heading">
              Your Health,{" "}
              <span className="text-primary-500">Our Priority</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-secondary-400 lg:mx-0 mx-auto">
              At Zia Clinic we combine experienced doctors, modern facilities,
              and compassionate care to keep you and your family healthy.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                to="/appointment"
                className="rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600 transition-colors no-underline"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+923001234567"
                className="rounded-lg border-2 border-primary-500 px-6 py-3 text-sm font-semibold text-primary-600 hover:bg-primary-50 transition-colors no-underline"
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=700&h=500&fit=crop"
              alt="Modern clinic interior"
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-800 font-heading sm:text-4xl">
              Our <span className="text-primary-500">Services</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-secondary-400">
              We offer a wide range of medical services to meet the healthcare
              needs of you and your family.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary-200 transition-all"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary-50 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 font-heading">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-400">
                  {s.desc}
                </p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-700 transition-colors no-underline"
                >
                  Learn More <FiArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-secondary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white font-heading sm:text-4xl">
              Why Choose <span className="text-primary-400">Zia Clinic</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-secondary-200">
              Your health deserves the best. Here's what sets us apart.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => (
              <div key={w.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-500/20 text-primary-400">
                  {w.icon}
                </div>
                <h3 className="text-lg font-semibold text-white font-heading">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm text-secondary-200">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Doctors Preview ── */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-800 font-heading sm:text-4xl">
              Meet Our <span className="text-primary-500">Doctors</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-secondary-400">
              Qualified, experienced, and dedicated to your care.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((d) => (
              <div
                key={d.name}
                className="overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={d.img}
                  alt={d.name}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-secondary-800 font-heading">
                    {d.name}
                  </h3>
                  <p className="text-sm text-primary-500 font-medium">
                    {d.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-primary-600 transition-colors no-underline"
            >
              View All Doctors <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary-800 font-heading sm:text-4xl">
              What Patients <span className="text-primary-500">Say</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="rounded-xl border border-gray-100 p-6 shadow-sm"
              >
                <div className="mb-3 flex gap-0.5 text-accent-500">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <FiStar key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-secondary-500 italic">
                  "{r.text}"
                </p>
                <p className="mt-4 text-sm font-semibold text-secondary-700">
                  — {r.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white font-heading sm:text-4xl">
            Ready to Take Care of Your Health?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-100">
            Book an appointment today and experience quality healthcare with
            experienced doctors who truly care.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/appointment"
              className="rounded-lg bg-white px-8 py-3 text-sm font-bold text-primary-600 shadow-lg hover:bg-primary-50 transition-colors no-underline"
            >
              Book Appointment
            </Link>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-white px-8 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors no-underline"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
