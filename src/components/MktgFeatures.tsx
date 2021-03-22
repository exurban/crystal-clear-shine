type Feature = {
  title: string;
  text: string;
};

type Props = {
  sectionTitle: string;
  sectionDescription: string;
  features: Feature[];
};

export const Features4x: React.FC<Props> = ({ sectionTitle, sectionDescription, features }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pt-6 py-10 px-4 sm:px-6 lg:py-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">{sectionTitle}</h2>
          <p className="mt-4 text-lg text-gray-500">{sectionDescription}</p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, idx) => (
            <div key={idx} className="relative">
              <dt>
                <svg
                  className="absolute h-6 w-6 text-brand-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
