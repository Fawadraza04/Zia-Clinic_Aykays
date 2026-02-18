import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/appointment", label: "Appointment" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500 text-white font-heading font-bold text-xl">
            Z
          </div>
          <span className="text-xl font-heading font-bold text-secondary-700">
            Zia <span className="text-primary-500">Clinic</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors no-underline ${
                  isActive
                    ? "text-primary-600 bg-primary-50"
                    : "text-secondary-600 hover:text-primary-600 hover:bg-primary-50/60"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+923001234567"
            className="flex items-center gap-1.5 text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors no-underline"
          >
            <FiPhone className="text-primary-500" /> 0300-1234567
          </a>
          <Link
            to="/appointment"
            className="rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-primary-600 transition-colors no-underline"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-secondary-600 bg-transparent border-none"
          aria-label="Toggle menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="lg:hidden border-t border-gray-100 bg-white px-4 pb-4">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-md text-sm font-medium no-underline ${
                  isActive
                    ? "text-primary-600 bg-primary-50"
                    : "text-secondary-600 hover:bg-primary-50/60"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="tel:+923001234567"
              className="flex items-center justify-center gap-2 rounded-lg border border-primary-500 px-4 py-2.5 text-sm font-semibold text-primary-600 no-underline"
            >
              <FiPhone /> Call Now
            </a>
            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-primary-500 px-4 py-2.5 text-center text-sm font-semibold text-white no-underline"
            >
              Book Appointment
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
