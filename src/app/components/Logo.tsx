// src/components/Logo.tsx
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/" className="group inline-block"> {/* Keep 'group' if you want hover effects like opacity */}
      <Image
        src="/logo.png"
        alt="MarkIt Logo"
        width={120} // Adjust to your logo's design
        height={40} // Adjust to your logo's design
        className="transition-opacity duration-300 group-hover:opacity-80" // Example hover effect
        priority
      />
    </Link>
  );
};

export default Logo;