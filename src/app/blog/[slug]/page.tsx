import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

export default async function page({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type == "blog" && slug.current == "${slug}"] {
  Title,Paragraph,image,block}[0]`;

  const data = await client.fetch(query);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
   

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-12 py-8">
        <article className="flex flex-col gap-y-8 items-center">
          {/* Blog Title */}
          <h1 className="text-center text-xl xs:text-3xl lg:text-5xl font-bold text-black dark:text-white">
            {data.Title}
          </h1>

          {/* Featured Image */}
          <Image
            src={urlFor(data.image).url() as string}
            width={500}
            height={500}
            alt={data.Title}
            className="rounded"
          />

          {/* Blog Summary Section */}
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-black dark:text-purple-800">
            Summary
          </h2>

          {/* Main Body of Blog */}
          <section className="text-lg leading-normal text-gray-700 dark:text-gray-300 text-justify">
            <PortableText value={data.block} />
          </section>

          {/* Go Back to Home Link */}
          <Link
            href="/"
            className="mt-8 text-purple-600 hover:underline dark:text-purple-400"
          >
            &larr; Go Back to Home
          </Link>
        </article>
      </main>

    
    </div>
  );
}