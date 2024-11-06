import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const navigation = {
  categories: [
    {
      name: "Frauen",
      clothing: [
        [
          { name: "Tops", href: "#" },
          { name: "Dresses", href: "#" },
          { name: "Pants", href: "#" },
          { name: "Denim", href: "#" },
          { name: "Sweaters", href: "#" },
          { name: "T-Shirts", href: "#" },
        ],
        [
          { name: "Jackets", href: "#" },
          { name: "Activewear", href: "#" },
          { name: "Shorts", href: "#" },
          { name: "Swimwear", href: "#" },
          { name: "Browse All", href: "#" },
        ],
      ],
      accessories: [
        { name: "Shoes", href: "#" },
        { name: "Jewelry", href: "#" },
        { name: "Handbags", href: "#" },
        { name: "Socks", href: "#" },
        { name: "Hats", href: "#" },
        { name: "Browse All", href: "#" },
      ],
      categories: [
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
        { name: "Basic Tees", href: "#" },
        { name: "Artwork Tees", href: "#" },
      ],
    },
    {
      name: "Männer",
      clothing: [
        [
          { name: "Dress Shirts", href: "#" },
          { name: "Pants", href: "#" },
          { name: "Jackets", href: "#" },
          { name: "T-Shirts", href: "#" },
          { name: "Jeans", href: "#" },
          { name: "Hoodies", href: "#" },
        ],
        [
          { name: "Vests", href: "#" },
          { name: "Kilts", href: "#" },
          { name: "Outdoors", href: "#" },
          { name: "Capes", href: "#" },
          { name: "Browse All", href: "#" },
        ],
      ],
      accessories: [
        { name: "Watches", href: "#" },
        { name: "Boots", href: "#" },
        { name: "Fanny Packs", href: "#" },
        { name: "Sunglasses", href: "#" },
        { name: "Browse All", href: "#" },
      ],
      categories: [
        { name: "Just Added", href: "#" },
        { name: "Clearance", href: "#" },
        { name: "Graphic Tees", href: "#" },
      ],
    },
  ],
  other: [
    { name: "Basteln", href: "#" },
    { name: "Holzkunst", href: "#" },
  ],
};

export default function Example() {
  return (
    <div className="bg-white relative z-1">
      <header className="relative bg-white z-10">
        <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex flex-1">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img alt="" className="h-8 w-auto" />
                </a>
              </div>
              {/* Flyout menus */}
              <PopoverGroup className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch z-20">
                <div className="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
                  {navigation.categories.map((category, categoryIdx) => (
                    <Popover key={categoryIdx} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="text-[#1E6EB4] relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                          {category.name}
                        </PopoverButton>
                      </div>

                      {/* Dropdown Panel */}
                      <PopoverPanel className="absolute inset-x-0 top-full z-50 bg-white text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in sm:text-sm shadow-lg">
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 pb-12 pt-10 md:grid-cols-2 lg:gap-x-8">
                              <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:gap-x-8">
                                <div>
                                  <p
                                    id="clothing-heading"
                                    className="font-medium text-gray-900"
                                  >
                                    Clothing
                                  </p>
                                  <div className="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                    <ul
                                      role="list"
                                      aria-labelledby="clothing-heading"
                                      className="space-y-6 sm:space-y-4"
                                    >
                                      {category.clothing[0].map((item) => (
                                        <li key={item.name} className="flex">
                                          <a
                                            href={item.href}
                                            className="hover:text-gray-800"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                    <ul
                                      role="list"
                                      aria-label="More clothing"
                                      className="mt-6 space-y-6 sm:mt-0 sm:space-y-4"
                                    >
                                      {category.clothing[1].map((item) => (
                                        <li key={item.name} className="flex">
                                          <a
                                            href={item.href}
                                            className="hover:text-gray-800"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8">
                                <div>
                                  <p
                                    id="accessories-heading"
                                    className="font-medium text-gray-900"
                                  >
                                    Accessories
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="accessories-heading"
                                    className="mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4"
                                  >
                                    {category.accessories.map((item) => (
                                      <li key={item.name} className="flex">
                                        <a
                                          href={item.href}
                                          className="hover:text-gray-800"
                                        >
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <p
                                    id="categories-heading"
                                    className="font-medium text-gray-900"
                                  >
                                    Categories
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="categories-heading"
                                    className="mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4"
                                  >
                                    {category.categories.map((item) => (
                                      <li key={item.name} className="flex">
                                        <a
                                          href={item.href}
                                          className="hover:text-gray-800"
                                        >
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {navigation.other.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-[#1E6EB4] flex items-center text-sm font-medium  hover:text-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="flex flex-1 items-center justify-end">
                {/* Search */}
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
