import { Link } from "react-router-dom";

const navigation = [
  { name: "Über Uns", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Partner", href: "/partner" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-y-8 lg:flex-row lg:items-center">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-start gap-x-12 lg:order-1 lg:justify-start">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Newsletter Section */}
          <div className="max-w-lg w-full lg:order-2 lg:w-1/2 lg:text-right">
            <h3 className="text-base font-semibold text-[#1E6EB4]">
              Abonniere unseren Newsletter
            </h3>
            <p className="mt-2 text-sm text-[#889AAA]">
              Erhalte exklusive Angebote und die neuesten Produkte direkt in
              deinen Posteingang.
            </p>
            <form className="mt-4 flex w-full lg:justify-end">
              <input
                type="email"
                placeholder="E-Mail Adresse"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:border-indigo-500 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="rounded-r-md bg-[#E02F1F] px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Abonnieren
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
