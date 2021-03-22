import ActiveLink from "./ActiveLink";
import Link from "next/link";
import FooterSection from "./Footer";

const Layout: React.FC<{ title?: string }> = ({ children, title = "Crystal Clear Shine" }) => {
  console.log({ title });
  return (
    <>
      <div className="sticky top-0 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
            <nav>
              <ul className="flex flex-row h-full font-sans  text-coolGray-800 ">
                <li className="my-auto p-2  text-coolGray-800 ">
                  <ActiveLink
                    activeClassName="bg-gradient-to-tr from-brand-200 via-brand-300 to-brand-600 px-2 text-brand-400 rounded"
                    href="/"
                  >
                    <a className="px-2 mx-2 text-3xl text-coolGray-800 font-hero">Shine</a>
                  </ActiveLink>
                </li>
                <li className="my-auto p-2 text-coolGray-800 ">
                  <ActiveLink activeClassName="text-brand-200" href="/hire-a-pro">
                    <a className="mx-2 text-2xl font-bold  text-coolGray-800 ">Why Hire a Pro?</a>
                  </ActiveLink>
                </li>
                <li className="my-auto p-2">
                  <ActiveLink activeClassName="text-brand-200" href="/our-work">
                    <a className="mx-2 text-2xl font-bold  text-coolGray-800 ">Our Work</a>
                  </ActiveLink>
                </li>
                <li className="my-auto p-2">
                  <ActiveLink activeClassName="text-brand-200" href="/blog">
                    <a className="mx-2 text-2xl font-bold">Blog</a>
                  </ActiveLink>
                </li>
              </ul>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/bill-pay">
                <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Pay a Bill
                </a>
              </Link>
              <Link href="/estimate">
                <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-600 hover:bg-brand-700">
                  Get an Estimate
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="min-h-screen">{children}</main>
      <FooterSection />
    </>
  );
};

export default Layout;
