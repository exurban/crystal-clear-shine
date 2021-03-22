// import Avatar from "./Avatar";
import DateFormatter from "./DateFormatter";
// import CoverImage from "./CoverImage";
import Link from "next/link";
import Author from "../types/author";

type Props = {
  title: string;
  postType: string;
  coverImage: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  postType,
  coverImage,
  date,
  readTime,
  excerpt,
  author,
  slug
}: Props) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]">
          <a>
            <img className="h-48 w-full object-cover" src={coverImage} alt="" />
          </a>
        </Link>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-brand-300">
            <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]">
              <a className="hover:underline">{postType}</a>
            </Link>
          </p>
          <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]">
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">{title}</p>
              <p className="mt-3 text-base text-gray-500">{excerpt}</p>
            </a>
          </Link>
        </div>

        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]">
              <a>
                <span className="sr-only">{author.name}</span>
                <img className="h-10 w-10 rounded-full" src={author.picture} alt="" />
              </a>
            </Link>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <Link as={`/blog/posts/${slug}`} href="/blog/posts/[slug]">
                <a className="hover:underline">{author.name}</a>
              </Link>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={date}>
                <DateFormatter dateString={date} />
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{readTime} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
