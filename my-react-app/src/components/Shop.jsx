import { Link } from "react-router-dom";
import ZipTasche1 from "../assets/img/ZipTasche1.jpg";
import HolzfigurenSet from "../assets/img/Figur.jpg";
import Vase from "../assets/img/Vase.jpg";
import Schal from "../assets/img/Schal.jpg";
import Pflegeset from "../assets/img/Body_set.jpg";
import Pilz from "../assets/img/Pilz.jpg";
import Sirup from "../assets/img/Sirup.jpg";
import Holz from "../assets/img/Holz.jpg";
import Ball from "../assets/img/Ball.jpg";
import TShirt from "../assets/img/T-Shirt.jpg";
import PlüschHase from "../assets/img/Plüsch-Hase.jpg";
import Kugel_blau from "../assets/img/Kugel_blau.jpg";
import Huhn_holz from "../assets/img/Huhn_holz.jpg";
import Geschenkband from "../assets/img/Geschenkband.jpg";

import { StarIcon } from "@heroicons/react/20/solid";

const products = [
  {
    id: 1,
    name: "Zip Tasche ",
    price: "110 CHF",
    rating: 4,
    reviewCount: 21,
    imageSrc: ZipTasche1,
    imageAlt: "Zip Tote Basket",
    href: "/productsite",
  },
  {
    id: 2,
    name: "Holzfiguren-Set",
    price: "65 CHF",
    rating: 5,
    reviewCount: 18,
    imageSrc: HolzfigurenSet,
    imageAlt: "Holzfiguren",
    href: "#",
  },
  {
    id: 3,
    name: "Vase",
    price: "35 CHF",
    rating: 5,
    reviewCount: 14,
    imageSrc: Vase,
    imageAlt: "Sticky Note Holder",
    href: "#",
  },
  {
    id: 4,
    name: "Schal",
    price: "50 CHF",
    rating: 4,
    reviewCount: 21,
    imageSrc: Schal,
    imageAlt: "Phone Holder",
    href: "#",
  },
  {
    id: 5,
    name: "Pflegeset",
    price: "149 CHF",
    rating: 5,
    reviewCount: 38,
    imageSrc: Pflegeset,
    imageAlt: "Basic Set",
    href: "#",
  },
  {
    id: 6,
    name: "Deko Holz-Pilz",
    price: "80 CHF",
    rating: 5,
    reviewCount: 27,
    imageSrc: Pilz,
    imageAlt: "Cozy Swiss Blanket",
    href: "#",
  },
  {
    id: 7,
    name: "Sirup",
    price: "35 CHF",
    rating: 4,
    reviewCount: 18,
    imageSrc: Sirup,
    imageAlt: "Handcrafted ceramic mug",
    href: "#",
  },
  {
    id: 8,
    name: "Holzklammer",
    price: "60 CHF",
    rating: 5,
    reviewCount: 42,
    imageSrc: Holz,
    imageAlt: "Cozy wool scarf",
    href: "#",
  },
  {
    id: 9,
    name: "Deko Ball",
    price: "25 CHF",
    rating: 4,
    reviewCount: 36,
    imageSrc: Ball,
    imageAlt: "Handmade Swiss candle",
    href: "#",
  },
  {
    id: 10,
    name: "T-Shirt Weggis",
    price: "120 CHF",
    rating: 5,
    reviewCount: 50,
    imageSrc: TShirt,
    imageAlt: "Swiss-made leather wallet",
    href: "#",
  },
  {
    id: 11,
    name: "Plüsch-Hase",
    price: "30 CHF",
    rating: 4,
    reviewCount: 28,
    imageSrc: PlüschHase,
    imageAlt: "Natural Swiss soap set",
    href: "#",
  },
  {
    id: 12,
    name: "Deko Kugel",
    price: "45 CHF",
    rating: 4,
    reviewCount: 16,
    imageSrc: Kugel_blau,
    imageAlt: "Swiss wooden key holder",
    href: "#",
  },
  {
    id: 13,
    name: "Huhn Holz",
    price: "50 CHF",
    rating: 5,
    reviewCount: 33,
    imageSrc: Huhn_holz,
    imageAlt: "Assorted Swiss herbal teas",
    href: "#",
  },
  {
    id: 14,
    name: "Geschenkband",
    price: "12 CHF",
    rating: 4,
    reviewCount: 21,
    imageSrc: Geschenkband,
    imageAlt: "Zip Tote Basket",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
            >
              <div className="h-[200px] aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <Link to={product.id === 1 ? "/productsite" : "#"}>
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </Link>
              </div>
              <div className="pb-4 pt-10 text-center">
                <h3 className="text-sm font-medium text-[#1E6EB4]">
                  <Link to={product.id === 1 ? "/productsite" : "#"}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          product.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.reviewCount} reviews
                  </p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
