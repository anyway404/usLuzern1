import Luzern_intro from "../assets/img/Luzern_intro.jpg";
import Sirup from "../assets/img/Sirup.jpg";

export default function Example() {
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
      <br />
      <br />
      <div className="grid h-[500px] grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        <div className="relative flex">
          <img
            alt=""
            src={Luzern_intro}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="relative flex w-full flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12">
            <h2 className="text-lg font-medium text-white text-opacity-75">
              Wer sind wir?
            </h2>
            <p className="mt-1 text-2xl font-medium text-white">
              Gerne stellen wir uns Ihnen vor
            </p>
            <a
              href="/about"
              className="mt-4 rounded-md bg-[#E02F1F] px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-[#889AAA]"
            >
              Über usLuzern
            </a>
          </div>
        </div>
        <div className="relative flex">
          <img
            alt=""
            src={Sirup}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="relative flex w-full flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12">
            <h2 className="text-lg font-medium text-white text-opacity-75">
              Stöbern Sie gerne in unserem Shop
            </h2>
            <p className="mt-1 text-2xl font-medium text-white">
              Unsere vielfälltigen Produkte
            </p>
            <a
              href="/shop"
              className="mt-4 rounded-md bg-[#E02F1F] px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-[#889AAA]"
            >
              Zum Shop
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
