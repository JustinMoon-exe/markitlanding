// src/components/MysteryBlurb.tsx
const MysteryBlurb = () => {
  return (
    <section className="py-16 md:py-24 flex justify-center px-4">
      {/* Changed max-w-2xl to max-w-3xl */}
      <div className="glass-card p-8 md:p-12 text-center max-w-3xl">
        <p className="font-amiko text-xl md:text-2xl text-off-white/70 leading-relaxed tracking-wide">
          We’re building a new kind of financial data foundation —
          <br className="hidden sm:block" />
          something programmable, unified, and intelligent.
        </p>
        <p className="mt-8 font-amiko text-base text-off-white/50 tracking-wider">
          Launching quietly. Stay tuned.
        </p>
      </div>
    </section>
  );
};

export default MysteryBlurb;