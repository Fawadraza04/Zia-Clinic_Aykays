import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FiPhone size={22} />,
    title: "Phone",
    lines: ["0300-1234567", "021-34567890"],
    href: "tel:+923001234567",
  },
  {
    icon: <FiMail size={22} />,
    title: "Email",
    lines: ["info@ziaclinic.pk"],
    href: "mailto:info@ziaclinic.pk",
  },
  {
    icon: <FiMapPin size={22} />,
    title: "Address",
    lines: ["123 Main Street,", "Gulshan-e-Iqbal, Karachi"],
    href: "https://maps.google.com/?q=Gulshan-e-Iqbal+Karachi",
  },
  {
    icon: <FiClock size={22} />,
    title: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 9:00 PM", "Sunday: 10:00 AM – 2:00 PM"],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-secondary-800 font-heading sm:text-5xl">
            Contact <span className="text-primary-500">Us</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-400">
            Have a question or need to reach us? We're here to help. Get in
            touch using any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                  {c.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 font-heading">
                  {c.title}
                </h3>
                {c.lines.map((line) =>
                  c.href ? (
                    <a
                      key={line}
                      href={c.href}
                      className="mt-1 block text-sm text-secondary-500 hover:text-primary-500 transition-colors no-underline"
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        c.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="mt-1 text-sm text-secondary-500">
                      {line}
                    </p>
                  ),
                )}
              </div>
            ))}
          </div>

          {/* Social Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/923001234567?text=Hello%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-white hover:bg-green-600 transition-colors no-underline"
            >
              <FaWhatsapp size={20} /> Chat on WhatsApp
            </a>
            <a
              href="https://facebook.com/ziaclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors no-underline"
            >
              <FaFacebookF size={18} /> Visit Facebook Page
            </a>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-secondary-800 font-heading">
            Find <span className="text-primary-500">Us</span>
          </h2>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title="Dr. Zia Medical Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.02559799498!2d67.0811!3d24.9215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f90157042d3%3A0x93d609e8bfa2e1d4!2sGulshan-e-Iqbal%2C%20Karachi!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white font-heading">
            Ready to Visit Us?
          </h2>
          <p className="mt-4 text-primary-100">
            Book your appointment online or walk in during our working hours.
          </p>
          <Link
            to="/appointment"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-sm font-bold text-primary-600 shadow hover:bg-primary-50 transition-colors no-underline"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
