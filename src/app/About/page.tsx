import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="text-gray-600 body-font h-full md:h-[550px] bg-white dark:bg-black">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black dark:bg-purple-800  inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-lg  text-gray-900 mb-1 tracking-wider dark:text-purple-800">
                  STEP 1
                </h2>
                <p className="leading-relaxed dark:text-white">
                I write informative and engaging posts, making complex topics easily understandable for your readers.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black dark:bg-purple-800  inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx={12} cy={5} r={3} />
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider dark:text-purple-800">
                  STEP 2
                </h2>
                <p className="leading-relaxed dark:text-white">
                My blog reflects my passion for learning new technologies, programming languages, and tools, sharing my insights with others.
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black dark:bg-purple-800 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider dark:text-purple-800">
                  FINISH
                </h2>
                <p className="leading-relaxed dark:text-white">
                My writing style is simple, focused on breaking down complicated concepts into digestible content, which is especially helpful for beginners.
                </p>
              </div>
            </div>
          </div>
          <Image
            className="w-full md:w-1/2 lg:w-2/5 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="/about.jpg"
            alt="step"
            width={1200}  // specify the width
            height={500}  // specify the height
          />
        </div>
      </div>
    </section>
  );
};

export default About;
