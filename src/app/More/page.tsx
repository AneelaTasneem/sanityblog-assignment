import React from 'react'
import Image from 'next/image'
import Link from 'next/link' // Import Link from Next.js

const More = () => {
  return (
    <section className="text-gray-600 h-[550px] body-font bg-white dark:bg-black ">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto ">
          <div className="flex flex-wrap w-full bg-gray-100 dark:bg-gray-800 -inset-0 px-5 relative mb-4">
            <Image
              alt="gallery"
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src="/brain2.jpg"
              width={820}
              height={400}
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl md:text-2xl text-gray-900 dark:text-white font-medium title-font mb-2">
                BLOGGERS
              </h2>
              <p className=" text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Science and Technology blooms.
              </p>
              <Link href="/">
                <div className="text-sm md:text-lg mt-3 dark:text-gray-500 flex items-center justify-center whitespace-nowrap">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 dark:bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src="/networking.jpg"
                  width={542}
                  height={460}
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl md:text-2xl text-gray-900 dark:text-white font-medium title-font mb-2">
                    BLOGGERS
                  </h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Science and Technology blooms.
                  </p>
                  <Link href="/">
                    <div className="text-sm md:text-lg mt-3 dark:text-gray-500 flex items-center justify-center whitespace-nowrap">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 dark:bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                  src="/robot.jpg"
                  width={542}
                  height={420}
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl md:text-2xl text-gray-900 dark:text-white font-medium title-font mb-2">
                    BLOGGERS
                  </h2>
                  <p className=" text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    Science and Technology blooms.
                  </p>
                  <Link href="/">
                    <div className="text-sm md:text-lg mt-3 dark:text-gray-500 flex items-center justify-center whitespace-nowrap">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default More;
