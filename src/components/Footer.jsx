import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 no-underline">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500 text-white font-heading font-bold text-lg">
                Z
              </div>
              <span className="text-lg font-heading font-bold text-white">
                Zia <span className="text-primary-400">Clinic</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-secondary-200 leading-relaxed">
              Providing trusted, patient-focused healthcare services in Karachi
              with experienced doctors and modern facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-400">
              Quick Links
            </h4>
            <ul className="space-y-2 list-none p-0 m-0">
              {[
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/doctors", label: "Our Doctors" },
                { to: "/appointment", label: "Book Appointment" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-secondary-200 hover:text-primary-400 transition-colors no-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-400">
              Services
            </h4>
            <ul className="space-y-2 list-none p-0 m-0">
              {[
                "General Consultation",
                "Pediatrics",
                "Gynecology",
                "Dermatology",
                "Diagnostics & Lab",
              ].map((s) => (
                <li key={s} className="text-sm text-secondary-200">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-400">
              Contact
            </h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li className="flex items-start gap-2 text-sm text-secondary-200">
                <FiMapPin className="mt-0.5 shrink-0 text-primary-400" />
                123 Main Street, Gulshan-e-Iqbal, Karachi
              </li>
              <li>
                <a
                  href="tel:+923001234567"
                  className="flex items-center gap-2 text-sm text-secondary-200 hover:text-primary-400 transition-colors no-underline"
                >
                  <FiPhone className="text-primary-400" /> 0300-1234567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ziaclinic.pk"
                  className="flex items-center gap-2 text-sm text-secondary-200 hover:text-primary-400 transition-colors no-underline"
                >
                  <FiMail className="text-primary-400" /> info@ziaclinic.pk
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-700 text-primary-400 hover:bg-primary-500 hover:text-white transition-colors no-underline"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="https://facebook.com/ziaclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-700 text-primary-400 hover:bg-primary-500 hover:text-white transition-colors no-underline"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-secondary-700 pt-6 text-center text-xs text-secondary-400">
          © {new Date().getFullYear()} Zia Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
