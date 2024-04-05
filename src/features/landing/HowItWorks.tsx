import StepListing from "./icons/works/Listing.svg";
import StepAudience from "./icons/works/Audience.svg";
import StepSupercharge from "./icons/works/Supercharge.svg";

export function HowItWorks() {
  return (
    <section id='how-it-works' className='bg-white py-24'>
      <div className='mx-auto max-w-[1090px] px-6'>
        <h1 className='text-6xl leading-[4rem] sm:max-w-xl'>How it works</h1>
        <p className='mt-6 max-w-3xl'>
          Ready to take your blogging game to the next level.Whether you're a
          seasoned blogger or just starting out, our intuitive platform makes
          content creation a breeze. Simply input your keyword, customize your
          options, and watch as AutoBlogger transforms your ideas into polished
          prose.
        </p>

        <div className='mt-16 flex flex-col gap-x-12 gap-y-12 md:flex-row'>
          <div className='md:flex-1'>
            <img src={StepListing} className='mx-auto mb-12 w-40' />
            <h4 className='text-center text-2xl font-semibold'>
              Enter Your Keyword
            </h4>
            <p className='mt-3 text-center'>
              Simply provide a keyword or topic of interest. Whether it's
              "travel tips," "digital marketing," or "healthy recipes,"
              AutoBlogger generates engaging content around your chosen subject.
            </p>
          </div>
          <div className='md:flex-1'>
            <img src={StepAudience} className='mx-auto mb-12 w-40' />
            <h4 className='text-center text-2xl font-semibold'>
              Customize Your Options
            </h4>
            <p className='mt-3 text-center'>
              Tailor your articles with optional features like generating post
              tags and excerpts. Specify the number of sections and articles you
              need to match your content requirements perfectly.
            </p>
          </div>
          <div className='md:flex-1'>
            <img src={StepSupercharge} className='mx-auto mb-12 w-40' />
            <h4 className='text-center text-2xl font-semibold'>
              Get Instant Results
            </h4>
            <p className='mt-3 text-center'>
              Sit back and relax as AutoBlogger works its magic. Within moments,
              you'll have professionally written blog posts ready to publish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
