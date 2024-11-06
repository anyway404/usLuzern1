import React from "react";
import PlaceholderImg from "../assets/img/PlaceholderImg.png";

const partners = [
  {
    name: "Holzwerkstatt Zürich",
    role: "Handgefertigte Holzmöbel und Dekorationsartikel",
    imageUrl: PlaceholderImg,
    bio: "Unsere Holzwerkstatt fertigt nachhaltige Möbel und Dekor aus lokalem Schweizer Holz an. Mit Liebe zum Detail und Handarbeit schaffen wir langlebige Produkte für moderne Räume.",
  },
  {
    name: "Alpenkräuter Luzern",
    role: "Bio-Kräuter und Teemischungen",
    imageUrl: PlaceholderImg,
    bio: "Alpenkräuter Luzern bietet eine Vielzahl an Kräutertees und Gewürzen aus kontrolliert biologischem Anbau. Wir verarbeiten unsere Kräuter direkt nach der Ernte, um die höchste Qualität sicherzustellen.",
  },
  {
    name: "KeramikArt Bern",
    role: "Handgefertigte Keramik und Töpferwaren",
    imageUrl: PlaceholderImg,
    bio: "KeramikArt Bern steht für einzigartiges Töpferhandwerk. Unsere Kollektionen verbinden traditionelle Techniken mit modernen Designs und bringen Farbe in dein Zuhause.",
  },
  {
    name: "Textil & Stil Basel",
    role: "Nachhaltige Mode und Heimtextilien",
    imageUrl: PlaceholderImg,
    bio: "Wir produzieren stilvolle, nachhaltige Mode und Heimtextilien aus natürlichen Materialien. Jedes Stück wird mit Sorgfalt in der Schweiz gefertigt.",
  },
  {
    name: "GlasDesign Genf",
    role: "Mundgeblasene Glaswaren",
    imageUrl: PlaceholderImg,
    bio: "Unser Atelier GlasDesign Genf kreiert einzigartige Glaswaren. Jedes Stück wird von Hand gefertigt und ist ein Unikat, das modernes Design mit traditioneller Handwerkskunst verbindet.",
  },
];

export default function PartnerCards() {
  return (
    <div className="container mx-auto p-8">
      {/* Header Section */}
      <div className="mx-auto max-w-2xl text-center mt-20 mb-12">
        <h2 className="text-[#1E6EB4] text-3xl font-semibold tracking-tight sm:text-5xl">
          Lerne unsere Partner kennen
        </h2>
        <p className="text-[#889AAA] mt-6 text-lg">
          Unsere Partner stehen für Qualität und Handwerkskunst. Entdecke die
          Vielfalt an lokal hergestellten Produkten, die in unserem Shop
          erhältlich sind.
        </p>
      </div>

      {/* Partner Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              className="h-48 w-full object-cover"
              src={partner.imageUrl}
              alt={partner.name}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#1E6EB4]">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-500">{partner.role}</p>
              <p className="mt-2 text-gray-700">{partner.bio}</p>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <div>
        <h1 className="text-[#1E6EB4]">Sie möchten selber Partner werden?</h1>
        <h2 className="text-[#889AAA ]">Melden Sie sich bei uns</h2>
        <div className=" mt-8 flex justify-center">
          <button
            type="submit"
            className="rounded-md bg-[#E02F1F] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Partner werden
          </button>
        </div>
      </div>
    </div>
  );
}
