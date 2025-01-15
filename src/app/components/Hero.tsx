'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const Hero = ({ data }: { data: Blog }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade-in effect after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`w-80 border h-[450px] border-gray-200 rounded-lg shadow-md overflow-hidden bg-white dark:bg-black dark:border-gray-950 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        className="w-full h-48 object-cover"
        src={urlFor(data.image).url()}
        alt={data.Title}
        width={320} // Adjust width as needed
        height={192} // Adjust height proportionally
        priority // Optional: Use for above-the-fold content
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {data.Title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {data.Paragraph}
        </p>
        <Link
          href={`/blog/${data.slug}`}
          className="text-purple-950 hover:underline hover:text-purple-400 dark:hover:text-purple-300 inline-flex items-center dark:text-purple-500 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
