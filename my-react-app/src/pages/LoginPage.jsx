import Header from "../components/Header";

export default function Example() {
  return (
    <>
      <Header />
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-[#1E6EB4]">
              Anmelden
            </h2>
          </div>
          <form action="#" method="POST" className="space-y-6">
            <div className="relative -space-y-px rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Emailadresse
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  autoComplete="email"
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Passwort
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Passwort"
                  autoComplete="current-password"
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm/6 text-gray-900"
                >
                  Speichern
                </label>
              </div>

              <div className="text-sm/6">
                <a
                  href="#"
                  className="font-semibold text-[#1E6EB4] hover:text-[#889AAA]"
                >
                  Passwort vergessen?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#E02F1F] px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Einloggen
              </button>
            </div>
          </form>

          <p className="text-center text-sm/6 text-gray-500">
            {" "}
            <a
              href="#"
              className="font-semibold text-[#1E6EB4] hover:text-[#889AAA]"
            >
              Werde zum Partner
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
