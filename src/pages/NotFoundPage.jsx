import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-primary-500 font-heading">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-bold text-secondary-800 font-heading">
          Page Not Found
        </h2>
        <p className="mt-2 text-secondary-400">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-primary-600 transition-colors no-underline"
          >
            Go Home
          </Link>
          <Link
            to="/appointment"
            className="rounded-lg border-2 border-primary-500 px-6 py-3 text-sm font-semibold text-primary-600 hover:bg-primary-50 transition-colors no-underline"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
