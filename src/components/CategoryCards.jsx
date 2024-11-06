import Figur from "../assets/img/Figur.jpg";
import Geschenkband from "../assets/img/Geschenkband.jpg";
import TShirt from "../assets/img/T-Shirt.jpg";
import Kugel_blau from "../assets/img/Kugel_blau.jpg";
import Ball from "../assets/img/Ball.jpg";

const categories = [
  {
    name: "Neue Produkte",
    href: "#",
    imageSrc: Figur,
  },
  {
    name: "Basteln",
    href: "#",
    imageSrc: Geschenkband,
  },
  {
    name: "Kleidung",
    href: "#",
    imageSrc: TShirt,
  },
  {
    name: "Accessories",
    href: "#",
    imageSrc: Kugel_blau,
  },
  {
    name: "Sale",
    href: "#",
    imageSrc: Ball,
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-[#1E6EB4]">
            Kategorien
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-[#889AAA] hover:text-indigo-500 sm:block"
          >
            Alle Kategorien im Shop
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
              <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img
                        alt=""
                        src={category.imageSrc}
                        className="h-full w-full object-cover object-center"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">
                      {category.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
