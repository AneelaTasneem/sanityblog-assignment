// page.tsx
import React from "react";
import Hero from "./components/Hero";
import { client } from "@/sanity/lib/client";
import ThemeToggle from "./components/ThemeToggle"; // Import the ThemeToggle component

const page = async () => {
  const query = `*[_type == 'blog'] | order(_createdAt asc) {
    Title,
    Paragraph,
    image,
    "slug": slug.current,
  }`;

  const data: Blog[] = await client.fetch(query);

  return (
    <div className="flex flex-wrap justify-center gap-6 px-6 py-12 bg-white dark:bg-black">
      {/* Theme Toggle Button */}
      <ThemeToggle />{" "}
      {/* This will add the button to the top right corner of the page */}
      {/* Hero Section and Blog Listings */}
      {data.map((data: Blog) => (
        <Hero data={data} key={data.slug} />
      ))}
    </div>
  );
};

export default page;
