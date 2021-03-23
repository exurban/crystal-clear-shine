import Link from "next/link";
import { NextSeo } from "next-seo";
import { Features4x } from "../components/MktgFeatures";
import { homeowners, businessOwners } from "../../data/features";

const Index = () => {
  return (
    <>
      <NextSeo
        title="Services | Crystal Clear Shine"
        description="Window cleaning, fleet cleaning, dryer vent cleaning services, power washing for homeowners and business owners."
        openGraph={{
          title: "Services | Crystal Clear Shine",
          description:
            "Window cleaning, fleet cleaning, dryer vent cleaning services, power washing for homeowners and business owners.",
          images: [
            {
              url: "https://gyreimages.s3.us-east-2.amazonaws.com/ccs-share-card.png",
              width: 1200,
              height: 630,
              alt: "OG Image"
            }
          ]
        }}
      />
      <div className="max-w-screen-xl mx-auto">
        <div className="absolute inset-0">
          <img
            className="mx-auto mt-24"
            src="/images/ccs-hero-xl.webp"
            alt="crystal-clear-shine-hero"
            width="1200px"
            height="423px"
          />
        </div>

        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:pt-32 pb:6 lg:px-8">
          <div className="mt-52 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4">
              <Link href="/estimate">
                <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-brand-700 bg-white hover:bg-brand-600 hover:text-white sm:px-8">
                  Request a Free Estimate
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Features4x
        sectionTitle={homeowners.sectionTitle}
        sectionDescription={homeowners.sectionDescription}
        features={homeowners.features}
      />

      <Features4x
        sectionTitle={businessOwners.sectionTitle}
        sectionDescription={businessOwners.sectionDescription}
        features={businessOwners.features}
      />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Service Areas</h2>
            <p className="mt-4 text-lg text-gray-500">
              Proudly serving the Wilmington, Leland, Southport, Carolina Beach, Kure Beach,
              Wrightsville Beach, Figure Eight Island, and Jacksonville areas for more than 30
              years.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
