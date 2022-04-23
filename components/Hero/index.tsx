import * as React from 'react';
import { StreamCircle } from 'components/Icons';
import { closeBanner } from 'utils/banner';

export default function Hero({ noBanner }: { noBanner: boolean }) {
  const [displayBanner, setBanner] = React.useState(!noBanner);

  if (!displayBanner) return <div className="h-[30px]"></div>;

  return (
    <section className="relative mb-[30px] flex flex-row flex-wrap items-center justify-center gap-6 bg-[#D9F2F4]/70 px-2 py-[52px] text-[#303030]">
      <button
        className="absolute right-3 top-3 p-2"
        onClick={() => {
          closeBanner();
          setBanner(false);
        }}
      >
        <span className="sr-only">Close Banner</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
            fill="#4E575F"
          />
        </svg>
      </button>
      <div className="relative left-[-12px] flex-shrink-0">
        <StreamCircle />
      </div>
      <h1 className="font-exo box-decoration-clone text-2xl font-bold sm:text-3xl lg:text-4xl">
        <span className="whitespace-nowrap">Stream seamless</span>{' '}
        <span className="hero-word-break whitespace-nowrap">recurring payments</span>{' '}
        <span className="hero-word-break">in crypto!</span>
      </h1>
      <p className="max-w-md 2xl:max-w-xl" style={{ lineHeight: '26px' }}>
        Automate salary txs, streaming them by the second so employees can withdraw whenever they want and you don't
        have to deal with sending txs manually.
      </p>
    </section>
  );
}