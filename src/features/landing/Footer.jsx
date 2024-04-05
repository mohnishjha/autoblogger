import footerLogo1 from "assets/footerLogo1.png";
import footerLogo2 from "assets/footerLogo2.png";
import footerLogo3 from "assets/footerLogo3.png";
import footerLogo4 from "assets/footerLogo4.png";

export function Footer() {
  return (
    <>
      <footer className='rounded-lg bg-gray-900'>
        <div className='mx-auto w-full max-w-screen-xl p-4 md:py-8'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <a
              href='#'
              className='mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse'
            >
              <span className='self-center whitespace-nowrap text-2xl font-semibold text-white'>
                AutoBlogger
              </span>
            </a>
            <ul className='mb-6 flex flex-wrap items-center text-sm font-medium sm:mb-0 text-gray-400'>
              <li>
                <a href='#' className='me-4 hover:underline md:me-6'>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className='my-6 sm:mx-auto lg:my-8 border-gray-700' />
          <span className='block text-sm sm:text-center text-gray-400'>
            © 2024{" "}
            <a href='#' className='hover:underline'>
              AutoBlogger
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
