import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Logo from "../assets/img/usLuzern_logo.png";

const navigation = [
  { name: "Über Uns", href: "/about" },
  { name: "Shop", href: "/shop" },
  { name: "Partner", href: "/partner" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src={Logo} className="h-10 w-auto" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold text-[#383735]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Searchbar für Desktop */}
        <div className="hidden lg:block lg:flex-1 lg:justify-center">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm placeholder-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600"
            />
            <MagnifyingGlassIcon className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Warenkorb & Login Buttons */}
        <div className="flex items-center justify-end gap-x-6">
          <Link
            to="/login"
            className="hidden text-sm font-semibold text-[#383735] lg:block"
          >
            Log in
          </Link>
          <Link
            to="/warenkorb"
            className="rounded-md bg-[#E02F1F] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#889AAA]"
          >
            Warenkorb
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#383735]"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center gap-x-6">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={Logo} className="h-8 w-auto" />
            </Link>
            <Link
              to="/shop"
              className="ml-auto rounded-md bg-[#E02F1F] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#889AAA]"
            >
              Warenkorb
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-[#383735] hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-[#383735] hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
