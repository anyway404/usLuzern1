import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid";
import Figur from "../assets/img/Figur.jpg";
import Vase from "../assets/img/Vase.jpg";

const products = [
  {
    id: 1,
    name: "Holzfiguren-Set",
    href: "#",
    price: "65 CHF",
    color: "Holzfigur",
    inStock: true,
    imageSrc: Figur,
    imageAlt: "Holzfiguren",
  },
  {
    id: 2,
    name: "Vase",
    href: "#",
    price: "35 CHF",
    color: "Sienna",
    inStock: true,
    size: "",
    imageSrc: Vase,
    imageAlt: "Sticky Note Holder",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#1E6EB4]">
          Warenkorb
        </h1>

        <form className="mt-12">
          <div>
            <h2 className="sr-only">Produkte in Deinem Warenkorb</h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              {products.map((product, productIdx) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                    />
                  </div>

                  <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div>
                      <div className="flex justify-between sm:grid sm:grid-cols-2">
                        <div className="pr-6">
                          <h3 className="text-sm">
                            <a
                              href={product.href}
                              className="text-[#1E6EB4] font-medium  hover:text-[#889AAA]"
                            >
                              {product.name}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.color}
                          </p>
                          {product.size ? (
                            <p className="mt-1 text-sm text-gray-500">
                              {product.size}
                            </p>
                          ) : null}
                        </div>

                        <p className="text-right text-sm font-medium text-gray-900">
                          {product.price}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
                        <label
                          htmlFor={`quantity-${productIdx}`}
                          className="sr-only"
                        >
                          Quantity, {product.name}
                        </label>
                        <select
                          id={`quantity-${productIdx}`}
                          name={`quantity-${productIdx}`}
                          className="block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base/5 font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                        </select>

                        <button
                          type="button"
                          className="ml-4 text-sm font-medium text-[#889AAA] hover:text-indigo-500 sm:ml-0 sm:mt-3"
                        >
                          <span>Artikel Löschen</span>
                        </button>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {product.inStock ? (
                        <CheckIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        />
                      ) : (
                        <ClockIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-gray-300"
                        />
                      )}

                      <span>
                        {product.inStock
                          ? "Auf Lager"
                          : `Ships in ${product.leadTime}`}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Order summary */}
          <div className="mt-10 sm:ml-32 sm:pl-6">
            <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
              <h2 className="sr-only">Order summary</h2>

              <div className="flow-root">
                <dl className="-my-4 divide-y divide-gray-200 text-sm">
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd className="font-medium text-gray-900">100 CHF</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">Versand</dt>
                    <dd className="font-medium text-gray-900">6 CHF</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">MWST</dt>
                    <dd className="font-medium text-gray-900">8 CHF</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-base font-medium text-gray-900">
                      Total
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      114 CHF
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-[#E02F1F] px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                oder{" "}
                <a
                  href="#"
                  className="font-medium text-[#1E6EB4] hover:text-indigo-500"
                >
                  Weiter Einkaufen
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
