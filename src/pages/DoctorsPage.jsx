import { Link } from "react-router-dom";

const doctors = [
  {
    name: "Dr. Ahmed Khan",
    qualification: "MBBS, FCPS (Medicine)",
    specialty: "General Physician",
    bio: "Dr. Ahmed Khan brings over 15 years of clinical experience in internal medicine. He is passionate about preventive care and chronic disease management, ensuring every patient receives personalized attention.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=500&fit=crop&crop=face",
  },
  {
    name: "Dr. Fatima Noor",
    qualification: "MBBS, FCPS (Gynecology & Obstetrics)",
    specialty: "Gynecologist & Obstetrician",
    bio: "Dr. Fatima specializes in women's health with expertise in prenatal care, high-risk pregnancies, and gynecological surgeries. She is known for her compassionate and thorough approach.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop&crop=face",
  },
  {
    name: "Dr. Hassan Ali",
    qualification: "MBBS, DCH (Pediatrics)",
    specialty: "Pediatrician",
    bio: "Dr. Hassan is a dedicated pediatrician with 10+ years of experience in child healthcare. He provides vaccinations, developmental assessments, and treatment for childhood illnesses.",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&h=500&fit=crop&crop=face",
  },
  {
    name: "Dr. Saira Malik",
    qualification: "MBBS, FCPS (Dermatology)",
    specialty: "Dermatologist",
    bio: "Dr. Saira is an experienced dermatologist treating skin conditions from acne to eczema. She also offers cosmetic dermatology consultations and is known for her patient-first approach.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop&crop=face",
  },
  {
    name: "Dr. Usman Raza",
    qualification: "MBBS, FCPS (Cardiology)",
    specialty: "Cardiologist",
    bio: "Dr. Usman is a board-certified cardiologist specializing in preventive cardiology, ECG interpretation, and heart disease management. He has served in leading hospitals of Karachi.",
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&h=500&fit=crop&crop=face",
  },
  {
    name: "Dr. Nadia Hussain",
    qualification: "MBBS, DOMS (Ophthalmology)",
    specialty: "Eye Specialist",
    bio: "Dr. Nadia is a skilled ophthalmologist offering comprehensive eye exams, vision correction, and treatment of common eye conditions with modern diagnostic tools.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&h=500&fit=crop&crop=face",
  },
];

export default function DoctorsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-secondary-800 font-heading sm:text-5xl">
            Our <span className="text-primary-500">Doctors</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-400">
            Meet our team of qualified and experienced medical professionals
            dedicated to providing the best care for you and your family.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((d) => (
              <div
                key={d.name}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-72 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <span className="rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-white">
                      {d.specialty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-800 font-heading">
                    {d.name}
                  </h3>
                  <p className="text-sm font-medium text-primary-500">
                    {d.qualification}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-secondary-400">
                    {d.bio}
                  </p>
                  <Link
                    to="/appointment"
                    className="mt-4 inline-block rounded-lg bg-primary-50 px-5 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-500 hover:text-white transition-colors no-underline"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-800 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white font-heading">
            Need to See a Specialist?
          </h2>
          <p className="mt-4 text-secondary-200">
            Book your appointment online or call us to schedule a visit with any
            of our doctors.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/appointment"
              className="rounded-lg bg-primary-500 px-8 py-3 text-sm font-semibold text-white shadow hover:bg-primary-600 transition-colors no-underline"
            >
              Book Appointment
            </Link>
            <a
              href="tel:+923001234567"
              className="rounded-lg border-2 border-primary-400 px-8 py-3 text-sm font-semibold text-primary-400 hover:bg-primary-400/10 transition-colors no-underline"
            >
              Call: 0300-1234567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
