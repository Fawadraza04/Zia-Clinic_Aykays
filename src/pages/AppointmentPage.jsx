import { useState, useRef, useEffect, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  preferredDate: "",
  message: "",
};

const initialErrors = {};

export default function AppointmentPage() {
  const formRef = useRef();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error"
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Load reCAPTCHA v2 script
  useEffect(() => {
    if (RECAPTCHA_SITE_KEY && !window.grecaptcha) {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      script.onload = () => setRecaptchaLoaded(true);
      document.head.appendChild(script);
    } else if (window.grecaptcha) {
      setRecaptchaLoaded(true);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear field error on change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validate = useCallback(() => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required";
    if (!form.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[\d\-+() ]{7,15}$/.test(form.phone.trim())) {
      errs.phone = "Enter a valid phone number";
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!form.preferredDate) {
      errs.preferredDate = "Please select a date";
    } else {
      const selected = new Date(form.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) errs.preferredDate = "Date cannot be in the past";
    }
    return errs;
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // Validate
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // reCAPTCHA check
    if (RECAPTCHA_SITE_KEY) {
      const recaptchaResponse = window.grecaptcha?.getResponse();
      if (!recaptchaResponse) {
        setErrors({ recaptcha: "Please complete the reCAPTCHA verification" });
        return;
      }
    }

    setSending(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        formRef.current,
        EMAILJS_KEY,
      );
      setStatus("success");
      setForm(initialForm);
      setErrors(initialErrors);
      // Reset reCAPTCHA
      if (window.grecaptcha) window.grecaptcha.reset();
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-secondary-800 font-heading sm:text-5xl">
            Book an <span className="text-primary-500">Appointment</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary-400">
            Fill out the form below and our team will get back to you shortly to
            confirm your appointment.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm lg:p-12">
            {status === "success" && (
              <div className="mb-8 flex items-center gap-3 rounded-lg bg-green-50 border border-green-200 p-4">
                <FiCheckCircle className="text-green-600 shrink-0" size={22} />
                <div>
                  <p className="font-semibold text-green-800">
                    Appointment Request Sent!
                  </p>
                  <p className="text-sm text-green-700">
                    Thank you! We will contact you shortly to confirm your
                    appointment.
                  </p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mb-8 flex items-center gap-3 rounded-lg bg-red-50 border border-red-200 p-4">
                <FiAlertCircle className="text-red-600 shrink-0" size={22} />
                <div>
                  <p className="font-semibold text-red-800">
                    Something went wrong
                  </p>
                  <p className="text-sm text-red-700">
                    Please try again or call us directly at 0300-1234567.
                  </p>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1 block text-sm font-medium text-secondary-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Muhammad Ahmed"
                  className={`w-full rounded-lg border px-4 py-3 text-sm text-secondary-800 outline-none focus:ring-2 transition ${errors.fullName ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-primary-400 focus:ring-primary-100"}`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Phone & Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-secondary-700"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="03XX-XXXXXXX"
                    className={`w-full rounded-lg border px-4 py-3 text-sm text-secondary-800 outline-none focus:ring-2 transition ${errors.phone ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-primary-400 focus:ring-primary-100"}`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-secondary-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full rounded-lg border px-4 py-3 text-sm text-secondary-800 outline-none focus:ring-2 transition ${errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-primary-400 focus:ring-primary-100"}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label
                  htmlFor="preferredDate"
                  className="mb-1 block text-sm font-medium text-secondary-700"
                >
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  required
                  value={form.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className={`w-full rounded-lg border px-4 py-3 text-sm text-secondary-800 outline-none focus:ring-2 transition ${errors.preferredDate ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-primary-400 focus:ring-primary-100"}`}
                />
                {errors.preferredDate && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.preferredDate}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-secondary-700"
                >
                  Message / Symptoms
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your symptoms or reason for visit..."
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-secondary-800 outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition resize-none"
                />
              </div>

              {/* reCAPTCHA */}
              {RECAPTCHA_SITE_KEY && (
                <div>
                  <div
                    className="g-recaptcha"
                    data-sitekey={RECAPTCHA_SITE_KEY}
                  ></div>
                  {errors.recaptcha && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.recaptcha}
                    </p>
                  )}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-lg bg-primary-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors border-none cursor-pointer"
              >
                {sending ? "Sending..." : "Submit Appointment Request"}
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-secondary-400">
              By submitting this form, you agree to be contacted by Dr. Zia
              Medical Clinic regarding your appointment.
            </p>
          </div>

          {/* Alternative */}
          <div className="mt-10 rounded-xl bg-primary-50 p-6 text-center">
            <p className="text-sm text-secondary-600">
              Prefer to book by phone?
            </p>
            <a
              href="tel:+923001234567"
              className="mt-2 inline-block text-lg font-bold text-primary-600 hover:text-primary-700 transition-colors no-underline"
            >
              Call: 0300-1234567
            </a>
            <p className="mt-1 text-xs text-secondary-400">
              Available Mon–Sat, 9:00 AM – 9:00 PM
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
