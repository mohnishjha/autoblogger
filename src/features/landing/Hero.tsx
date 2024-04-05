import cx from "clsx";

import NavMore from "./icons/hero/nav-more.svg";
import Logo from "./icons/hero/logo.svg";
import downloadLogoPng from "assets/receive-square.png";
import Cross from "./icons/hero/cross.svg";

import SiteVideo from "assets/site-video.mp4";

import { Button } from "components/Button";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Nav() {
  const navigate = useNavigate();
  let [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handler() {
      if (!navRef.current) return;

      let nav = navRef.current;
      if (window.scrollY === 0) {
        nav.classList.remove("shadow-xl");

        nav.classList.add("sm:py-12");
        nav.classList.remove("sm:py-6");

        nav.classList.add("sm:bg-light-blue");
        nav.classList.remove("xs:bg-white");
      } else {
        nav.classList.add("shadow-xl");

        nav.classList.remove("sm:py-12");
        nav.classList.add("sm:py-6");

        nav.classList.remove("sm:bg-light-blue");
        nav.classList.add("xs:bg-white");
      }
    }
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={
        "fixed left-0 top-0 z-[100] flex w-screen flex-row flex-wrap items-center justify-between gap-x-4 gap-y-6 bg-white/60 px-6 py-8 transition-all sm:bg-light-blue sm:px-10 xl:gap-x-16 xl:px-40"
      }
    >
      <img src={Logo} className='relative left-0.5 shrink-0' />
      <div className='hidden flex-wrap gap-y-2 sm:flex'>
        <div className='mr-6 flex items-center gap-x-8 font-normal hover:[&>*]:text-black'>
          <a href='#how-it-works'>How it Works</a>
          <a href='#faqs'>FAQ</a>
        </div>
        <div className='flex items-center gap-x-2 hover:[&>*]:text-black'>
          <Link to="/login" className='tc rounded-full border border-dark-blue px-5 py-4 hover:bg-light-yellow'>
            Sign In
          </Link>
          <Link to="/signup" className='rounded-full bg-light-yellow px-5 py-4'>
            Sign Up
          </Link>
        </div>
      </div>
      <div className='sm:hidden'>
        <img
          src={NavMore}
          onClick={() => setOpen(true)}
          className='w-[50px] cursor-pointer'
        />
      </div>

      {open && (
        <div className='fixed inset-0 z-50 flex flex-col bg-light-blue px-4 py-6 text-2xl'>
          <img
            onClick={close}
            src={Cross}
            className='cursor-pointer self-end p-2'
          />
          <div className='mt-6 flex flex-col items-center gap-y-8 hover:[&>*]:text-black'>
            <a onClick={close} href='#how-it-works'>
              How it Works
            </a>
            <a onClick={close} href='#faqs'>
              FAQ
            </a>
          </div>

          <div className='mt-14 flex flex-col items-center gap-y-4'>
            <Button onClick={() => navigate('/login')} className='rounded-full border border-dark-blue'>
              Sign In
            </Button>
            <Button onClick={() => navigate('/signup')} className='rounded-full bg-light-yellow'>Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
}

function Content() {
  const navigate = useNavigate();

  return (
    <section className='relative flex flex-col-reverse items-start justify-between gap-x-6 px-6 py-8 sm:px-10 sm:py-12 lg:flex-row xl:px-40'>
      <div className='shrink-0 max-lg:mt-10'>
        <div className='max-w-[600px] text-[54px] leading-[0.95] sm:text-[62px] md:text-[76px]'>
          Your Ultimate
          <wbr />
          Blogging Companion
        </div>
        <p className='mt-4 text-lg leading-normal sm:max-w-lg'>
          Unlock the power of AI-driven content creation. Say goodbye to
          writer's block and hello to hassle-free blogging! Sign up now.
        </p>
        <div className='mt-6 flex flex-wrap gap-x-1 gap-y-3 md:mb-20'>
          <Button onClick={() => navigate('/login')} className='tc whitespace-nowrap border border-transparent bg-white text-xl shadow-md hover:border-blue-950 max-sm:flex-1'>
            Get Started
          </Button>
        </div>
      </div>
      <div className='relative overflow-hidden bg-white shadow-md p-10 rounded-xl'>
        <img
          // className='max-w-[800px] max-md:h-[300px] max-md:max-w-full max-md:scale-[1.7]'
          className='md:w-[400px]'
          src="/illustration.svg"
        />
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <div className='relative'>
      <Nav />
      <Content />
    </div>
  );
}
