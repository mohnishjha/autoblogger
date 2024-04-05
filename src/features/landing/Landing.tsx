import { Hero } from "./Hero";
import { WhiteOne } from "./WhiteOne";
import { Optimize } from "./Optimize";
import { HowItWorks } from "./HowItWorks";
import { Unoptimized } from "./Unoptimized";
import { Faqs } from "./Faqs";
import { Footer } from "./Footer";

import "@fontsource/plus-jakarta-sans/200.css";
import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";

export function Landing() {
  return (
    <div className="font-['Plus_Jakarta_Sans'] pt-40 bg-[#CDE4F2] text-[#213046] font-medium">
      <Hero />
      <WhiteOne />
      <Unoptimized />
      <Optimize />
      <HowItWorks />
      <Faqs />
      <Footer />
    </div>
  );
}
