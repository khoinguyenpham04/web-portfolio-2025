import React from 'react';
import { SparkleIcon } from '../icons/SparkleIcon';

// --- SVG Icon Components (Unchanged) ---
// In a real project, you might place these in their own files.
const NotionLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" width="1em" className={className}>
    <svg viewBox="0 0 120 126" style={{ width: '100%', height: '100%', display: 'block', fill: 'inherit', flexShrink: 0 }}>
      <path d="m7.5434 5.40612 69.3741-5.120205c8.5191-.732314 10.711-.2417737 16.0655 3.656575l22.145 15.59941c3.654 2.6825 4.872 3.4128 4.872 6.337v85.5571c0 5.362-1.949 8.533-8.763 9.018l-80.5636 4.876c-5.115.245-7.5494-.486-10.2281-3.901l-16.30795-21.206c-2.92219-3.903-4.13735-6.8233-4.13735-10.24v-76.0489c0-4.38486 1.94945-8.04243 7.5434-8.52798z" fill="#fff"></path>
      <path clipRule="evenodd" d="m76.9175.285915-69.3741 5.120205c-5.59395.48555-7.5434 4.14312-7.5434 8.52798v76.0489c0 3.4167 1.21516 6.337 4.13735 10.24l16.30795 21.206c2.6787 3.415 5.1131 4.146 10.2281 3.901l80.5636-4.876c6.814-.485 8.763-3.656 8.763-9.018v-85.5571c0-2.7717-1.094-3.5724-4.32-5.9327-.178-.1299-.361-.2644-.552-.4043l-22.145-15.59941c-5.3545-3.8983487-7.5464-4.388889-16.0655-3.656575zm-44.4175 24.189785c-6.5771.4452-8.0716.5463-11.8066-2.495l-9.4982-7.5559c-.9688-.9771-.4829-2.1959 1.9493-2.4377l66.6911-4.87545c5.5965-.48854 8.5165 1.46463 10.7083 3.17005l11.4381 8.2882c.487.2428 1.702 1.7034.241 1.7034l-68.8739 4.1452c-.2922.0195-.5751.0387-.8491.0572zm-7.6758 86.2273v-72.6344c0-3.1681.9736-4.6317 3.8926-4.8775l79.1002-4.6297c2.683-.2437 3.897 1.4637 3.897 4.6297v72.1469c0 3.171-.488 5.856-4.87 6.098l-75.693 4.39c-4.3806.241-6.3268-1.219-6.3268-5.123zm74.7229-68.7382c.4849 2.196 0 4.3899-2.1947 4.6366l-3.6473.7284v53.6232c-3.1664 1.706-6.0864 2.681-8.5195 2.681-3.8957 0-4.8713-1.219-7.7893-4.8734l-23.8558-37.5369v36.3181l7.5488 1.7074s0 4.3848-6.0903 4.3848l-16.7898.977c-.4878-.977 0-3.412 1.703-3.9l4.3814-1.2171v-48.019l-6.0834-.4886c-.4878-2.1959.7272-5.362 4.1371-5.6077l18.0118-1.2169 24.8265 38.0255v-33.6386l-6.3298-.7282c-.4859-2.6845 1.4585-4.6338 3.8926-4.8755z" fill="#000" fillRule="evenodd"></path>
    </svg>
  </svg>
);
const AppleLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 170 170" className={className}>
        <path d="m150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929 0.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002 0.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-0.9 2.61-1.85 5.11-2.86 7.51zm-31.26-123.01c0 8.1021-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375-0.119-0.972-0.188-1.995-0.188-3.07 0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.3113 11.45-8.597 4.62-2.2516 8.99-3.4968 13.1-3.71 0.12 1.0831 0.17 2.1663 0.17 3.2409z" fill="currentColor"></path>
    </svg>
);
const NotionMailIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 64 64" width="1em" className={className}>
        <svg viewBox="0 0 22 22" style={{ width: '100%', height: '100%', display: 'block', fill: 'inherit', flexShrink: 0 }}>
            <path d="M1.55617 8.19127C0.579346 8.44327 0.322683 9.19783 0.797222 9.6789L4.51639 13.1375C4.56 13.1758 4.58732 13.2262 4.59755 13.2843L5.74661 19.8009C5.87804 20.5463 6.83186 20.7831 7.29769 20.1855L9.19411 17.7479C9.25825 17.6676 9.37598 17.656 9.45269 17.7253L12.4303 20.3926C13.1551 20.9664 14.1015 20.6318 14.3274 20.0581L20.8045 4.1832C21.3339 2.76468 20.2979 1.31037 18.3367 2.12389" fill="currentColor"></path>
            <path d="M6.5025 11.7319C10.1428 9.58286 12.7689 7.53232 15.9535 5.62596C16.2611 5.44184 16.5291 5.82255 16.2599 6.05928C15.5026 6.72523 14.7709 7.37237 14.5951 7.54025C14.2008 7.91697 9.79719 11.6886 9.79719 11.6886L7.61508 13.6861C8.54636 15.0129 12.1389 17.7421 13.1126 18.1146C15.6038 13.1812 17.298 8.95012 19.0422 4.23471C19.1762 3.87253 18.8246 3.52014 18.4618 3.65253L7.97959 7.47798L3.24764 9.38752L6.5025 11.7319Z" fill="white"></path>
        </svg>
    </svg>
);
const NotionCalendarIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 64 64" width="1em" className={className}>
        <svg viewBox="0 0 57 60" style={{ width: '100%', height: '100%', display: 'block', fill: 'inherit', flexShrink: 0 }}>
            <path d="M6.18613 49.1689C5.15664 49.1575 4.2418 48.8935 3.53102 48.23C3.53102 48.23 3.52873 48.23 3.52643 48.2254C3.44389 48.1451 3.36593 48.0625 3.29256 47.9798C2.73082 47.337 2.42587 46.5129 2.42587 45.6222L2.41899 8.93385C2.41899 6.81041 4.20741 4.90505 6.3237 4.77421L42.9289 2.50615C43.0091 2.50155 43.0871 2.49926 43.1673 2.49926C44.0822 2.49926 44.9351 2.82983 45.5863 3.44505C45.6757 3.52999 45.7605 3.61722 45.8385 3.70904C46.0494 3.95008 46.2237 4.21637 46.3613 4.50332C46.226 4.21867 46.0494 3.95238 45.8385 3.71134C46.3865 4.34952 46.6869 5.16216 46.6869 6.04368V6.98258C46.6869 6.98258 46.7098 7.75161 45.9486 7.80211L45.9531 7.8067L12.2851 9.91866C9.81569 10.0725 7.80946 12.2143 7.80946 14.6912C7.80946 14.6912 7.7957 48.5537 7.79341 48.6088C7.76819 49.1689 7.30733 49.1689 6.92672 49.1689H6.18613Z" fill="black"></path>
            <path d="M54.5994 52.0086C54.5994 52.0637 54.5948 52.1188 54.5902 52.1739C54.51 53.3515 53.5722 54.3892 52.4189 54.6026C52.396 54.6026 52.3731 54.6095 52.3501 54.6095L13.3008 56.9763H13.1792C12.4157 56.9373 11.7095 56.6434 11.1592 56.1246C10.5425 55.5438 10.1963 54.7496 10.171 53.8795C10.171 53.8451 10.1664 53.8107 10.1664 53.7739V14.9277C10.1664 14.8726 10.1664 14.8198 10.171 14.7647C10.2559 13.5182 11.2968 12.4301 12.5395 12.3015C12.5716 12.3015 12.6037 12.2923 12.6358 12.29L51.7058 9.83832C51.7677 9.83373 51.8296 9.83143 51.8916 9.83143C52.5955 9.83143 53.2512 10.0862 53.7533 10.5568C54.1041 10.8851 54.3518 11.296 54.4848 11.7529C54.5421 11.948 54.5765 12.1523 54.5902 12.3612L54.5994 52.0086Z" fill="black"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M48.9865 50.7782L16.2929 52.6835C14.9562 52.7776 13.7731 52.3231 13.8098 50.5693V23.2699C13.8098 22.3333 14.5802 21.7341 15.4308 21.6905L49.4199 19.6497C50.2682 19.6061 50.963 20.2213 50.963 21.073V48.4206C50.963 49.4215 50.713 50.7093 48.9934 50.7759H48.9888L48.9865 50.7782Z" fill="white"></path>
            <path d="M23.935 29.9662C22.3369 30.0649 21.7958 31.2862 21.7981 33.164V33.4945C21.6078 33.5405 21.4473 33.5818 21.2547 33.5933C20.1037 33.6644 19.2737 32.7278 19.2714 31.0474C19.2691 28.4763 21.5665 26.0591 25.9435 25.7859C29.8414 25.5426 32.336 27.4296 32.3406 30.7582C32.3406 33.2627 30.2678 35.0418 28.2249 35.5973C32.0585 35.7856 33.6589 37.9274 33.6635 40.6637C33.6681 45.3445 30.2518 47.9959 24.9805 48.3242L24.8521 48.3311C20.8901 48.579 18.1089 47.0708 18.1066 44.4675C18.1066 42.9846 19.1888 41.7312 20.819 41.6279C20.9474 41.6187 21.0735 41.6439 21.2019 41.6371C21.5252 44.2862 23.3159 45.2618 25.1044 45.1516C26.8286 45.0437 28.0415 43.8799 28.0415 42.2316V42.165C28.0392 39.594 25.8977 39.4654 22.6694 39.3369L22.1558 36.2699C25.1594 35.719 26.6589 34.7365 26.6566 32.9574C26.6566 31.0451 25.5996 29.8583 23.9373 29.9639H23.935V29.9662Z" fill="black"></path>
            <path d="M38.3432 28.7036C35.1492 29.6287 34.4453 28.2215 34.7938 26.75C36.7107 26.3001 41.693 24.8034 43.5777 24.1262L43.6007 43.8684L47.0835 44.3757C47.0835 45.6613 46.3498 46.4647 45.0406 46.5474C43.9537 46.6139 41.4293 46.7058 40.2164 46.7815C38.3317 46.8986 34.881 47.181 34.881 47.181C34.7847 46.9238 34.7526 46.6621 34.7526 46.4303C34.7526 45.8036 35.0071 45.1608 35.8371 44.8785L38.3592 44.0612L38.3409 28.7036H38.3432Z" fill="black"></path>
        </svg>
    </svg>
);

// --- Reusable Placeholder Component ---
const ImagePlaceholder = ({ className }: { className?: string }) => (
    // In a real app, this would be a <Image> component from next/image
    <div className={`bg-neutral-200 ${className}`}></div>
);


const FeaturedHackathons = () => {
    return (
        <section className="w-full max-w-[1100px] mx-auto py-16 px-6 font-sans text-[#191919]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 text-sm font-medium border border-neutral-300 bg-white px-3 py-1.5 rounded-full mb-4">
                        <SparkleIcon className="size-5"/>
                        <span>Winning Hackathons</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutråal-900 mb-4">
                            Featured Hackathons
                        </h2>
                        <p className="text-lg text-neutral-700 max-w-[50ch] mx-auto">
                        Discover our latest web applications built with modern technologies, delivering exceptional user experiences.
                        </p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-6 mb-8 pt-10">
                
                {/* --- Notion Desktop Block --- */}
                <div className="bg-[#F6F5F4] rounded-xl overflow-hidden relative flex flex-col justify-between lg:row-span-2">
                    <div className="p-10 flex flex-col gap-6">
                        <NotionLogo className="w-12 h-12 text-black" />
                        <div>
                            <h3 className="text-[28px] font-bold leading-tight m-0">Get started on Notion</h3>
                            <p className="text-base text-black/70 mt-1">Your AI workspace.</p>
                        </div>
                        <a href="#" className="w-fit inline-flex items-center justify-center gap-2 bg-[#007AFF] text-white px-5 py-2.5 rounded-lg text-base font-medium no-underline cursor-pointer transition-colors duration-200 hover:bg-[#0056b3]">
                            <AppleLogo className="w-6 h-6 fill-current" />
                            Download for Mac
                        </a>
                    </div>
                    <div className="w-full relative pt-[61.29%]">
                        {/* Using padding-top for aspect ratio. The image is absolutely positioned inside. */}
                        <ImagePlaceholder className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>

                {/* --- Notion Mail Block --- */}
                <div className="bg-[#F6F5F4] rounded-xl overflow-hidden relative flex flex-col justify-between min-h-[250px]">
                     <div className="p-6 flex flex-col gap-4 flex-grow z-10">
                        <NotionMailIcon className="w-12 h-12 text-black" />
                        <div>
                            <h3 className="text-[28px] font-bold leading-tight m-0">Notion Mail</h3>
                            <p className="text-base text-black/70 mt-1">The inbox that thinks like you.</p>
                        </div>
                        <a href="#" className="w-fit inline-flex items-center justify-center bg-white text-[#191919] border border-black/10 px-4 py-2 rounded-lg text-base font-medium no-underline cursor-pointer transition-colors duration-200 hover:bg-black/5">
                            Download
                        </a>
                    </div>
                     <div className="absolute right-0 bottom-0 w-[260px] h-[230px] z-0">
                        <ImagePlaceholder className="w-full h-full" />
                    </div>
                </div>
                
                {/* --- Notion Calendar Block --- */}
                <div className="bg-[#F6F5F4] rounded-xl overflow-hidden relative flex flex-col justify-between min-h-[250px]">
                    <div className="p-6 flex flex-col gap-4 flex-grow z-10">
                        <NotionCalendarIcon className="w-12 h-12 text-black" />
                        <div>
                            <h3 className="text-[28px] font-bold leading-tight m-0">Notion Calendar</h3>
                            <p className="text-base text-black/70 mt-1">Time and work, together.</p>
                        </div>
                        <a href="#" className="w-fit inline-flex items-center justify-center bg-white text-[#191919] border border-black/10 px-4 py-2 rounded-lg text-base font-medium no-underline cursor-pointer transition-colors duration-200 hover:bg-black/5">
                            Download
                        </a>
                    </div>
                    <div className="absolute right-0 bottom-0 w-[260px] h-[230px] z-0">
                         <ImagePlaceholder className="w-full h-full" />
                    </div>
                </div>

            </div>
            <p className="text-center text-black/70 text-base">
                Notion is always at home right{' '}
                <a href="#" className="text-inherit no-underline font-medium group">
                    <span className="border-b border-black/30 transition-colors duration-200 group-hover:border-black/70">in your browser</span>
                </a>.
            </p>
        </section>
    );
};

export default FeaturedHackathons;