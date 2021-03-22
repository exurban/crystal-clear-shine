import { NextSeo } from "next-seo";

const OurWork = () => {
  return (
    <>
      <NextSeo
        title="Our Work | Crystal Clear Shine"
        description="Window cleaning, fleet cleaning, dryer vent cleaning services, power washing for homeowners and business owners."
        openGraph={{
          title: "Our Work | Crystal Clear Shine",
          description:
            "Window cleaning, fleet cleaning, dryer vent cleaning services, power washing for homeowners and business owners."
        }}
      />
      <div className="max-w-screen-xl mx-auto">
        <h2>
          Photos of our work and some impressive before & afters + all those great customer
          testimonials.
        </h2>
      </div>
    </>
  );
};

export default OurWork;
