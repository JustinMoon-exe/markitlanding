const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col p-4 md:p-8 lg:p-16 relative overflow-hidden">
      {/* Top Left CTA Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-40 lg:left-55 text-off-white text-center md:text-left z-10 p-6">
        <h2 className="font-amiko text-4xl sm:text-8xl md:text-9xl lg:text-[8rem] font-bold leading-normal flex flex-col min-w-0">
          <div className="whitespace-nowrap">The future of</div>
          <div className="whitespace-nowrap">trade <span className="text-markit-orange drop-shadow-[0_0_8px_rgba(255,116,0,0.8)]">intelligence</span></div>
        </h2>
      </div>
      
      <div className="absolute bottom-20 right-1/2 translate-x-1/2 md:translate-x-0 md:right-40 lg:right-50 z-0 flex flex-col items-end group">
        <div className="relative inline-block">
          <h1 className="font-krona uppercase tracking-wide-krona text-off-white leading-none flex items-baseline -mb-1 sm:-mb-2 md:-mb-3">
            <span className="text-8xl sm:text-9xl md:text-9xl lg:text-[11rem]">M</span>
            <span className="text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[9rem]">ARK</span>
            <span className="text-8xl sm:text-9xl md:text-9xl lg:text-[11rem]">I</span>
            <span className="text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[9rem] ml-[-0.7rem]">T</span>
          </h1>


          <span
            className="absolute bottom-[-8px] right-0 block h-[3px] sm:h-[4px] w-0 bg-markit-orange
                       transition-all duration-1000 ease-in-out group-hover:w-full"
          ></span>
        </div>
        {/* <p className="font-amiko text-lg md:text-xl text-off-white opacity-70 mt-4 max-w-md text-right">
          The future of trade intelligence.
        </p> */}
      </div>
    </section>
  );
};
export default HeroSection;