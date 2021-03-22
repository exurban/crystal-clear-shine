import Author from "./author";

type PostType = {
  slug: string;
  title: string;
  postType: string;
  excerpt: string;
  coverImage: string;
  photoCredit: string;
  date: string;
  readTime: string;
  author: Author;
  ogImage: {
    url: string;
  };
  content: string;
};

export default PostType;
