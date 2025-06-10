// src/components/HeroSection.tsx
import Logo from './Logo';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
      {/* ... (content from previous full code, ensuring min-h-screen) ... */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
        <Logo />
      </div>
      <div className="relative z-0 flex flex-col items-center group">
        <div className="relative inline-block">
          <h1 className="font-krona uppercase tracking-wide-krona text-off-white leading-none flex items-baseline -mb-1 sm:-mb-2 md:-mb-3">
            <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem]">M</span>
            <span className="text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[8rem]">ARK</span>
            <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem]">I</span>
            <span className="text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[8rem]">T</span>
          </h1>
          <span
            className="absolute bottom-[-8px] left-0 block h-[3px] sm:h-[4px] w-0 bg-markit-orange
                       transition-all duration-1000 ease-in-out group-hover:w-full"
          ></span>
        </div>
        <p className="font-amiko text-lg md:text-xl text-off-white opacity-70 mt-4 max-w-md">
          Built for signal, not noise.
        </p>
      </div>
    </section>
  );
};
export default HeroSection;