import { Link } from "react-router-dom";
import {
  FaStethoscope,
  FaBaby,
  FaFemale,
  FaHeartbeat,
  FaNotesMedical,
  FaMicroscope,
  FaTeeth,
  FaEye,
  FaBone,
} from "react-icons/fa";

const services = [
  {
    icon: <FaStethoscope size={32} />,
    title: "General Consultation",
    desc: "Comprehensive health evaluations by experienced general physicians. We diagnose and treat a wide range of conditions, from common illnesses to chronic disease management. Regular check-ups help detect health issues early.",
    features: [
      "Complete physical exams",
      "Chronic disease management",
      "Preventive health screenings",
      "Prescription & referrals",
    ],
  },
  {
    icon: <FaBaby size={32} />,
    title: "Pediatrics",
    desc: "Specialized healthcare for infants, children, and adolescents. Our pediatricians provide vaccinations, growth monitoring, and treatment for childhood illnesses in a child-friendly environment.",
    features: [
      "Vaccinations & immunization",
      "Growth & development tracking",
      "Childhood illness treatment",
      "Nutritional guidance",
    ],
  },
  {
    icon: <FaFemale size={32} />,
    title: "Gynecology & Obstetrics",
    desc: "Complete women's health services including prenatal and postnatal care, routine screenings, and treatment of gynecological conditions by experienced female specialists.",
    features: [
      "Prenatal & postnatal care",
      "Routine screenings & exams",
      "Family planning consultations",
      "Gynecological treatments",
    ],
  },
  {
    icon: <FaHeartbeat size={32} />,
    title: "Cardiology",
    desc: "Comprehensive heart health assessments and management. Our cardiology team provides ECG, blood pressure monitoring, cholesterol management, and preventive cardiac care.",
    features: [
      "ECG & heart monitoring",
      "Blood pressure management",
      "Cholesterol screening",
      "Preventive cardiac care",
    ],
  },
  {
    icon: <FaNotesMedical size={32} />,
    title: "Dermatology",
    desc: "Expert diagnosis and treatment of skin conditions, allergies, and infections. We also provide cosmetic dermatology consultations for various skin concerns.",
    features: [
      "Skin condition diagnosis",
      "Allergy treatment",
      "Acne & scar management",
      "Cosmetic consultations",
    ],
  },
  {
    icon: <FaMicroscope size={32} />,
    title: "Diagnostics & Laboratory",
    desc: "On-site laboratory and diagnostic services for quick and accurate results. From routine blood work to specialized tests, we ensure timely and reliable diagnostics.",
    features: [
      "Blood tests & panels",
      "Urine & stool analysis",
      "Ultrasound & imaging",
      "Quick result turnaround",
    ],
  },
  {
    icon: <FaTeeth size={32} />,
    title: "Dental Care",
    desc: "Preventive and restorative dental services for the whole family. From routine cleanings to fillings and extractions, our dental team ensures your oral health is in good hands.",
    features: [
      "Dental check-ups & cleanings",
      "Fillings & extractions",
      "Oral hygiene guidance",
      "Emergency dental care",
    ],
  },
  {
    icon: <FaEye size={32} />,
    title: "Eye Care",
    desc: "Comprehensive eye exams and vision care services. Our ophthalmology department handles routine vision tests, prescriptions, and common eye condition treatments.",
    features: [
      "Vision testing",
      "Prescription glasses",
      "Eye infection treatment",
      "Preventive eye care",
    ],
  },
  {
    icon: <FaBone size={32} />,
    title: "Orthopedics",
    desc: "Treatment for bone, joint, and muscle conditions. Our orthopedic specialists handle fractures, sports injuries, arthritis management, and rehabilitation guidance.",
    features: [
      "Fracture treatment",
      "Joint pain management",
      "Sports injury care",
      "Physical therapy referrals",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-secondary-800 font-heading sm:text-5xl">
            Our <span className="text-primary-500">Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-400">
            Comprehensive healthcare services designed to meet the needs of you
            and your entire family under one roof.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-12">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col gap-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:flex-row lg:p-10 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Icon Area */}
              <div className="flex shrink-0 items-center justify-center lg:w-48">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary-50 text-primary-500">
                  {s.icon}
                </div>
              </div>
              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-secondary-800 font-heading">
                  {s.title}
                </h2>
                <p className="mt-3 leading-relaxed text-secondary-500">
                  {s.desc}
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-secondary-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/appointment"
                  className="mt-6 inline-block rounded-lg bg-primary-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-600 transition-colors no-underline"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white font-heading">
            Need a Consultation?
          </h2>
          <p className="mt-4 text-primary-100">
            Our doctors are ready to help. Book an appointment or call us today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/appointment"
              className="rounded-lg bg-white px-8 py-3 text-sm font-bold text-primary-600 shadow hover:bg-primary-50 transition-colors no-underline"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+923001234567"
              className="rounded-lg border-2 border-white px-8 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors no-underline"
            >
              Call: 0300-1234567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
