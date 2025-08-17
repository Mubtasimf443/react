/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Tag } from 'lucide-react';


export interface IBlog {
  id: string;
  title: string;
  description: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  readTime: number;
  publishedAt: string;
  slug: string;
}

interface Props {
  blog: IBlog;
  className?: string;
}

const BlogCard: FC<Props> = ({ blog, className = '' }) => {
  return (
    <article className={`
            bg-gray-800 
            rounded-lg 
            overflow-hidden 
            transition-all 
            duration-300 
            hover:-translate-y-2 
            hover:shadow-xl
            ${className}
        `}>
      {/* Blog Image */}
      <Link href={`/blogs/${blog.slug}`} className="block relative h-48 w-full">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm">
          {blog.category}
        </div>
      </Link>

      {/* Blog Content */}
      <div className="p-6">
        <Link href={`/blogs/${blog.slug}`}>
          <h3 className="text-xl font-bold text-white mb-2 hover:text-primary-500 transition-colors">
            {blog.title}
          </h3>
        </Link>

        <p className="text-gray-400 mb-4 line-clamp-2">
          {blog.description}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Image
                src={blog.author.avatar}
                alt={blog.author.name}
                width={24}
                height={24}
                className="rounded-full mr-2"
              />
              <span>{blog.author.name}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{blog.readTime} min read</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;