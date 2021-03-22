import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../../components/Container";
import PostPage from "../../../components/PostPage";
import { getPostBySlug, getAllPosts } from "../../../lib/api";
import PostTitle from "../../../components/PostTitle";
import Head from "next/head";
import markdownToHtml from "../../../lib/markdownToHtml";
import PostType from "../../../types/post";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Container>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{post.title} | Crystal Clear Shine</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostPage
              title={post.title}
              postType={post.postType}
              excerpt={post.excerpt}
              coverImage={post.coverImage}
              photoCredit={post.photoCredit}
              date={post.date}
              author={post.author}
              content={post.content}
            />
          </article>
        </>
      )}
    </Container>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "readTime",
    "content",
    "ogImage",
    "coverImage"
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug
        }
      };
    }),
    fallback: false
  };
}
