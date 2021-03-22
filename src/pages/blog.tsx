import PostPreview from "../components/PostPreview";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props) => {
  return (
    <>
      <Head>
        <title>Blog | Crystal Clear Shine</title>
      </Head>
      <div className="max-w-screen-xl mx-auto">
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                From the blog
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Sometimes we have thoughts on things. Occasionally, we write them down. These are
                those things.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-x-5 gap-y-12 lg:grid-cols-3 lg:max-w-none">
              {allPosts.map(post => (
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  postType={post.postType}
                  coverImage={post.coverImage}
                  date={post.date}
                  readTime={post.readTime}
                  author={post.author}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "author", "coverImage", "excerpt"]);

  return {
    props: { allPosts }
  };
};
