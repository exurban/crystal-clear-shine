import { ReactNode, FunctionComponent } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children, ...customMeta }: Props) => {
  const router = useRouter();

  const meta = {
    title: `Crystal Clear Shine`,
    description: `Wilmington's premier exterior surface cleaners.`,
    image: "https://crystal-clear-shine.vercel.app/images/ccs-hero-xl.jpg",
    type: "website",
    ...customMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://crystal-clear-shine.vercel.app${router.asPath}`}
        />
        <link rel="canonical" href={`https://crystal-clear-shine.vercel.app${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Crystal Clear Shine" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@crystalshine" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="container mx-auto px-5">{children}</div>
    </>
  );
};

export default Container;
