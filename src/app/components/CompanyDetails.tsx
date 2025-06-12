// src/components/CompanyDetails.tsx

const CompanyDetails = () => {
  return (
    <div className="h-full w-full p-4 flex flex-col justify-center">
      <p className="font-amiko text-lg text-off-white leading-relaxed">
        Our AI engine classifies your product SKUs for tariff codes, then delivers real-time duty rates and regulations.
      </p>
      <p className="font-amiko text-lg text-off-white leading-relaxed mt-4">
        We&apos;re building the <span className="italic text-markit-maroon">single source of truth</span> for trade compliance.
      </p>
    </div>
  );
};

CompanyDetails.displayName = 'CompanyDetails';
export default CompanyDetails;
