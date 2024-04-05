const Pill = (
  <svg
    width="56"
    height="24"
    viewBox="0 0 56 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <rect
      x="1.5"
      y="1"
      width="53"
      height="22"
      rx="11"
      stroke="#213046"
      strokeWidth="1"
    />
  </svg>
);

export function WhiteOne() {
  return (
    <div className="max-w-full overflow-x-auto bg-white py-6">
      <div className="flex max-w-none items-center gap-x-4 md:gap-x-14 px-6 text-xl font-normal sm:px-12 md:justify-center lg:px-20 [&>*]:shrink-0">
        <p>Increase ranking</p>
        {Pill}
        <p>Wordpress Integration</p>
        {Pill}
        <p>Maximize revenue</p>
        {Pill}
        <p>Increase reviews</p>
      </div>
    </div>
  );
}
