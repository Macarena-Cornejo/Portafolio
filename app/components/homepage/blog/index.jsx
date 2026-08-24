// @flow strict

import Link from "next/link";

function Blog({ blogs = [] }) {
  if (!Array.isArray(blogs) || blogs.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="my-12 lg:my-24">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            BLOG
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.slice(0, 6).map((blog) => (
          <Link
            key={blog.id}
            href={blog.url}
            target="_blank"
            className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-300 bg-[#1b203e] rounded-lg p-4 block"
          >
            <p className="text-[#16f2b3] text-xs mb-2">
              {blog.reading_time_minutes} min read
            </p>
            <p className="text-white text-base font-medium line-clamp-3">
              {blog.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Blog;
