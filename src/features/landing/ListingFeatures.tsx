import FeatureOne from "./icons/listfeatures/one.jpg";
import FeatureTwo from "./icons/listfeatures/two.jpg";

export function ListingFeatures() {
  return (
    <section id="listing-features" className="bg-white py-24">
      <div className="max-w-[1090px] mx-auto px-6">
        <h1 className="text-6xl leading-[4rem]">
          Listing optimizing is for...
        </h1>

        <div className="mt-16 flex flex-col gap-x-6 gap-y-12 text-2xl font-semibold md:flex-row">
          <div className="overflow-hidden rounded-[70px] bg-[#F0FAFF] px-16 pb-16 md:flex-1">
            <div className="mt-[-220px] h-[341px] rotate-[5deg] overflow-hidden rounded-[44px] md:mt-[-150px] md:w-[391px]">
              <img
                src={FeatureOne}
                className="h-full w-full scale-[1.2] object-cover object-[0,90px] md:scale-150 md:object-top"
              />
            </div>

            <h4 className="mt-16 text-4xl font-semibold leading-none">
              Individual Host
            </h4>
            <p className="mt-8 max-w-xs text-xl font-normal leading-[1.6]">
              Elevate Your Airbnb Listing with SEO-Optimized Titles and
              Captivating Descriptions
            </p>
          </div>
          <div className="overflow-hidden rounded-[70px] bg-[#E4EFF5] px-16 pb-16 md:flex-1">
            <div className="mt-[-220px] h-[341px] rotate-[5deg] overflow-hidden rounded-[44px] md:mt-[-150px] md:w-[391px]">
              <img
                src={FeatureTwo}
                className="h-full w-full scale-[1.2] object-cover object-[0,70px] md:scale-150 md:object-top"
              />
            </div>

            <h4 className="mt-16 text-4xl font-semibold leading-none">
              Property Manager
            </h4>
            <p className="mt-8 max-w-xs text-xl font-normal leading-[1.6]">
              Revitalize Your Property Management Expertise! Amplify Your
              Reputation with Professional Insights and Craft Alluring Host
              Bios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
