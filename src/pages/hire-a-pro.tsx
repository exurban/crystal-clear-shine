import ContentCentered from "../components/MktgContentCentered";
import { NextSeo } from "next-seo";

const HireAPro = () => {
  return (
    <>
      <NextSeo
        title="Hire a Pro | Crystal Clear Shine"
        description="Window cleaning, fleet cleaning, dryer vent cleaning services, power washing for homeowners and business owners."
        openGraph={{
          title: "Hire a Pro | Crystal Clear Shine",
          description:
            "Window cleaning, fleet cleaning, dryer vent cleaning services, power washing for homeowners and business owners."
        }}
      />
      <div className="max-w-screen-xl mx-auto mt-10 mb-20">
        <ContentCentered />
      </div>
    </>
  );
};

export default HireAPro;
