import Author from "../types/author";
import DateFormatter from "./DateFormatter";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  title: string;
  postType: string;
  excerpt: string;
  coverImage: string;
  photoCredit: string;
  date: string;
  author: Author;
  content: string;
};

const PostPage = ({
  title,
  postType,
  excerpt,
  coverImage,
  photoCredit,
  date,
  author,
  content
}: Props) => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              {postType}
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h3>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <span className="sr-only">{author.name}</span>
                <img className="h-10 w-10 rounded-full" src={author.picture} alt="" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  <a className="">{author.name}</a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime={date}>
                    <DateFormatter dateString={date} />
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={coverImage}
                    alt="Whitney leaning against a railing on a downtown street"
                    width="1184"
                    height="1376"
                  />
                </div>
                {photoCredit && photoCredit.length > 0 && (
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <svg
                      className="flex-none w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">{photoCredit}</span>
                  </figcaption>
                )}
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">{excerpt}</p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
