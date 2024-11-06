const people = [
  {
    name: "Person 1",
    role: "Funktion",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quidem facere blanditiis quo ducimus sint explicabo temporibus cum voluptate beatae.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Person 2",
    role: "Funktion",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quidem facere blanditiis quo ducimus sint explicabo temporibus cum voluptate beatae..",
    xUrl: "#",
    linkedinUrl: "#",
  },

  {
    name: "Person 3",
    role: "Funktion",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quidem facere blanditiis quo ducimus sint explicabo temporibus cum voluptate beatae..",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Person 4",
    role: "Funktion",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quidem facere blanditiis quo ducimus sint explicabo temporibus cum voluptate beatae..",
    xUrl: "#",
    linkedinUrl: "#",
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-[#1E6EB4] sm:text-5xl">
            usLuzern
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600 ">
            usLuzern ist eine Plattform, die kleine, handwerkliche und
            nachhaltige Schweizer Unternehmen vorstellt und ihre Produkte
            anbietet. Die Partner, darunter Holzwerkstätten, Kräuterproduzenten
            und Keramikateliers, bieten hochwertige, lokal gefertigte Produkte,
            die oft traditionelle Handwerkskunst mit modernem Design vereinen.
            Ziel ist es, Schweizer Kleinbetriebe zu unterstützen und Kunden
            nachhaltig hergestellte Produkte näherzubringen.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                alt=""
                src={person.imageUrl}
                className="aspect-[3/2] w-full rounded-2xl object-cover"
              />
              <h3 className="text-[#1E6EB4] mt-6 text-lg/8 font-semibold">
                {person.name}
              </h3>
              <p className="text-[#889AAA]  text-base/7 ">{person.role}</p>
              <p className="mt-4 text-base/7 text-gray-600">{person.bio}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a
                    href={person.xUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">X</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
