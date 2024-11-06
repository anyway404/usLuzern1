import { StarIcon } from "@heroicons/react/20/solid";
import ZipTasche1 from "../assets/img/ZipTasche1.jpg";
import Figur from "../assets/img/Figur.jpg";
import Vase from "../assets/img/Vase.jpg";

// Beispielprodukte und Bewertungen
const reviews = [
  {
    id: 1,
    productId: 1,
    productName: "Zip Tasche",
    imageSrc: ZipTasche1,
    title: "Stilvoll und funktional",
    rating: 5,
    content: `<p>Diese Tasche ist einfach perfekt. Sie passt zu allem und bietet genug Platz für den Alltag. Definitiv eine Empfehlung!</p>`,
    author: "Lara K.",
    date: "Oct 20, 2024",
    datetime: "2023-10-20",
  },
  {
    id: 2,
    productId: 2,
    productName: "Holzfiguren-Set",
    imageSrc: Figur,
    title: "Einzigartige Qualität",
    rating: 5,
    content: `<p>Die Holzfiguren sind wunderschön verarbeitet und ein absoluter Hingucker in meinem Wohnzimmer. Werde sicher noch weitere Sets kaufen.</p>`,
    author: "Martin R.",
    date: "Sep 10, 2024",
    datetime: "2023-09-10",
  },
  {
    id: 3,
    productId: 3,
    productName: "Vase",
    imageSrc: Vase,
    title: "Perfekt für meine Deko",
    rating: 4,
    content: `<p>Eine wunderschöne Vase, die sofort auffällt. Könnte ein bisschen größer sein, aber ansonsten ideal für kleine Blumen.</p>`,
    author: "Emma S.",
    date: "Aug 15, 2024",
    datetime: "2023-08-15",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RecentReviews() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-medium text-[#1E6EB4]">
          Neuste Produktbewertungen
        </h2>
        <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
            >
              {/* Produktbild und Name */}
              <div className="lg:col-span-3 lg:col-start-1 xl:col-span-2">
                <div className="flex items-center">
                  <img
                    src={review.imageSrc}
                    alt={review.productName}
                    className="h-24 w-24 object-cover rounded-md"
                  />
                  <h3 className="text-[#1E6EB4] ml-4 text-sm font-medium ">
                    {review.productName}
                  </h3>
                </div>
              </div>

              {/* Bewertung und Inhalt */}
              <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                <div className="flex items-center xl:col-span-1">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          review.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-700">
                    {review.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                </div>

                <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                  <h3 className="text-sm font-medium text-[#1E6EB4]">
                    {review.title}
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: review.content }}
                    className="mt-3 space-y-6 text-sm text-gray-500"
                  />
                </div>
              </div>

              {/* Rezensent-Info */}
              <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                <p className="font-medium text-gray-900">{review.author}</p>
                <time
                  dateTime={review.datetime}
                  className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                >
                  {review.date}
                </time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
