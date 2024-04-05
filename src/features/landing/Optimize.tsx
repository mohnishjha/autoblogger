import cx from "clsx";
import { ReactNode } from "react";

import Icon1 from "./icons/optimize/of1.svg";
import Icon2 from "./icons/optimize/of2.svg";
import Icon3 from "./icons/optimize/of3.svg";
import Icon4 from "./icons/optimize/of4.svg";
import Icon5 from "./icons/optimize/of5.svg";
import Icon6 from "./icons/optimize/of6.svg";

function OptimizeFeature({
  icon,
  title,
  body
}: {
  icon: string;
  title: ReactNode;
  body: ReactNode;
}) {
  return (
    <div
      className={cx(
        "col-span-full grid grid-cols-subgrid border-b-2 border-dotted border-[#9FB4C4] py-7 last:border-0",
        "group cursor-pointer",
        "relative"
      )}
    >
      <div className='absolute inset-0 bg-white/50 opacity-0 transition-opacity group-hover:opacity-100' />

      <div className='col-span-full grid grid-cols-subgrid items-center px-4'>
        <div
          className='max-md:hidden'
          style={{ width: "calc((100vw - 1090px) * 0.5)" }}
        />
        <img
          src={icon}
          className='relative mr-6 w-[50px] shrink-0 sm:mr-8 md:w-[80px] md:mr-12 lg:mr-16'
        />
        <h2 className='relative text-2xl font-semibold leading-8 sm:mr-8 md:max-w-xs md:text-3.5xl md:leading-10  md:mr-12 lg:mr-16'>
          {title}
        </h2>
        <p className='relative max-w-md max-md:col-[2/3] max-md:row-[2/3]'>
          {body}
        </p>
        <div
          className='max-md:hidden'
          style={{ width: "calc((100vw - 1090px) * 0.5)" }}
        />
      </div>
    </div>
  );
}

export function Optimize() {
  return (
    <section id='optimize-your-potential' className='bg-light-blue py-24'>
      <div className='mx-auto max-w-[1090px] px-6'>
        <h1 className='text-6xl leading-[4rem] sm:max-w-xl'>
          Revolutionize Your Content Creation
        </h1>
        <p className='mt-6 max-w-3xl'>
          Are you tired of spending hours brainstorming blog ideas and crafting
          content? Say goodbye to writer's block and hello to effortless
          blogging with AutoBlogger! Our AI-powered tool revolutionizes the way
          you create content, saving you time and energy while delivering
          high-quality articles tailored to your needs.
        </p>
      </div>

      <div className='relative mt-16 grid grid-cols-[auto,auto,1fr] sm:grid-cols-[repeat(4,max-content),1fr]'>
        <OptimizeFeature
          icon={Icon1}
          title={"Login and Sign Up"}
          body={`
          Enjoy a personalized experience by creating an account. Sign up now to unlock exclusive features and streamline your blogging process.
          `}
        />
        <OptimizeFeature
          icon={Icon2}
          title={"Download Your Articles"}
          body={
            "Once your articles are generated, download them effortlessly. You'll have access to polished content that's ready to share on your blog or website."
          }
        />
        <OptimizeFeature
          icon={Icon3}
          title={"Wordpress Integration"}
          body={`Take your blogging to the next level with AutoBlogger's seamless integration with Wordpress. Effortlessly upload your generated articles directly to your Wordpress site, saving you time and hassle.`}
        />
        <OptimizeFeature
          icon={Icon4}
          title={"Save Time"}
          body={`No more staring at a blank screen. AutoBlogger streamlines the content creation process, allowing you to focus on what matters most - growing your online presence.`}
        />
        <OptimizeFeature
          icon={Icon5}
          title={"Quality Content"}
          body={`Our AI-powered tool ensures that every article is well-researched, engaging, and tailored to your specifications. Impress your audience with professionally crafted blog posts.`}
        />
        <OptimizeFeature
          icon={Icon1}
          title={"Flexibility"}
          body={`Whether you're a solo blogger, content marketer, or business owner, AutoBlogger adapts to your needs. Generate one article or bulk content effortlessly.`}
        />
      </div>
    </section>
  );
}
