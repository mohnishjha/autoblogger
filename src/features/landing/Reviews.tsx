import Quote from "./icons/reviews/quote.svg";

import User1 from "./icons/reviews/u1.png";
import User2 from "./icons/reviews/u2.png";
import User3 from "./icons/reviews/u3.png";
import User4 from "./icons/reviews/u4.png";
import User5 from "./icons/reviews/u5.png";
import User6 from "./icons/reviews/u6.png";

function ReviewBlock({
  review,
  image,
  name,
  designation,
}: {
  review: string;
  image: string;
  name: string;
  designation: string;
}) {
  return (
    <div className="flex flex-col items-start gap-y-5 rounded-[30px] bg-white/60 px-8 py-8 font-normal lg:flex-row">
      <img src={Quote} className="mb-2 mr-6 shrink-0 max-sm:w-[40px]" />
      <p className="mr-6 flex-1">
        {review}
      </p>
      <div className="shrink-0">
        <img src={image} />
        <h5 className="mt-3 text-xl font-semibold">{name}</h5>
        <p className="max-w-[130px] text-gray-muted">{designation}</p>
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-24">
      <div className="max-w-[1090px] md:mx-auto px-6">
        <h1 className="text-6xl leading-[4rem]">What people tell about Us</h1>
      </div>

      <div className="max-w-[1090px] md:mx-auto overflow-x-auto md:px-6">
        <div className="mt-16 max-w-none grid-cols-2 flex-row gap-6 md:grid max-md:flex max-md:px-12 [&>*]:shrink-0 max-md:[&>*]:w-[300px]">
          <ReviewBlock
            review={`Revitalize Your Property Management Expertise! Amplify Your Reputation
            with Professional Insights and Craft Alluring Host Bios. Overhaul Your
            Listings with Our Innovative Photo Analytics - Take the First Step
            Towards Exceptional Hosting Now!`}
            image={User1}
            name="Abercromby"
            designation="Property Manager"
          />
          <ReviewBlock
            review={`Elevate Your Airbnb Listing with SEO-Optimized Titles and Captivating Descriptions.
            Enhance Your Photos and Guest Reviews Today! Overhaul Your Listings with Our Innovative Photo
            Analytics - Take the First Step Towards Exceptional Hosting Now!`}
            image={User2}
            name="Sarah"
            designation="Individual Airbnb Host"
          />
          <ReviewBlock
            review={`Elevate Your Airbnb Listing with SEO-Optimized Titles and Captivating Descriptions.
            Enhance Your Photos and Guest Reviews Today! Overhaul Your Listings with Our Innovative Photo
            Analytics - Take the First Step Towards Exceptional Hosting Now!`}
            image={User3}
            name="Oliver"
            designation="Property Manager"
          />
          <ReviewBlock
            review={`Revitalize Your Property Management Expertise! Amplify Your Reputation
            with Professional Insights and Craft Alluring Host Bios. Overhaul Your
            Listings with Our Innovative Photo Analytics - Take the First Step
            Towards Exceptional Hosting Now!`}
            image={User4}
            name="Vincent"
            designation="Property Manager"
          />
          <ReviewBlock
            review={`Revitalize Your Property Management Expertise! Amplify Your Reputation
            with Professional Insights and Craft Alluring Host Bios. Overhaul Your
            Listings with Our Innovative Photo Analytics - Take the First Step
            Towards Exceptional Hosting Now!`}
            image={User5}
            name="Carlos"
            designation="Property Manager"
          />
          <ReviewBlock
            review={`Elevate Your Airbnb Listing with SEO-Optimized Titles and Captivating Descriptions.
            Enhance Your Photos and Guest Reviews Today! Overhaul Your Listings with Our Innovative Photo
            Analytics - Take the First Step Towards Exceptional Hosting Now!`}
            image={User6}
            name="Olivia"
            designation="Individual Airbnb Host"
          />
        </div>
      </div>
    </section>
  );
}
