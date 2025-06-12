// src/components/WhyNowSection.tsx

const WhyNowSection = () => {
  return (
    <div className="h-full w-full p-4 flex flex-col justify-center">
      <p className="font-amiko text-lg text-off-white leading-relaxed">
        This year&apos;s sudden <span className="font-bold text-markit-orange">tariff spikes</span> on electronics and automotive parts forced thousands of firms to eat into margins and halt shipments at major ports.
      </p>
      <p className="font-amiko text-lg text-off-white leading-relaxed mt-4">
        Emerging free-trade zones and new bilateral agreements mean duty rules shift overnight.
      </p>
      <p className="font-amiko text-lg text-off-white leading-relaxed mt-4">
        At the same time, companies are demanding a <span className="italic text-markit-maroon">single source of truth</span> for compliance—today&apos;s AI classification layer is tomorrow&apos;s full trade-data platform.
      </p>
      <p className="font-amiko text-lg text-markit-orange/70 italic mt-4 leading-relaxed">
        With MarkIt, you adapt to every regulation change the moment it&apos;s announced.
      </p>
    </div>
  );
};

WhyNowSection.displayName = 'WhyNowSection';
export default WhyNowSection;
