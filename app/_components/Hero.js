import React from "react";

function Hero() {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="bg-gradient-to-r from-red-500 to-purple-700 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              MySync
            </h1>
            <br />
            <hr />
            <br />

            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-4xl">
              Upload, Store & Share Files
              <span className="sm:block"> easily and securely.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Easily upload, store, and share files of various formats with
              others. Users can securely upload files to the platform, generate
              shareable links, and manage access permissions for recipients.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/upload"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
