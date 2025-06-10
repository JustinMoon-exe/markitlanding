"use client";

import { useState, forwardRef } from 'react';

// Define props for CTAForm if you need to pass ref explicitly with type
// type CTAFormProps = {}; // No extra props needed for now

const CTAForm = forwardRef<HTMLDivElement>((props, ref) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    alert(`Thank you! ${email} has been noted. We'll be in touch.`);
    setEmail('');
  };

  return (
    <div ref={ref} className="glass-card h-full w-full p-4 flex flex-col justify-center">
      <h3 className="font-krona text-base text-off-white text-center mb-3 uppercase tracking-wider">
        Stay <span className="text-markit-orange">Informed</span>
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full bg-transparent border border-white/20 rounded-lg px-3 py-2 text-off-white placeholder-gray-400
                     focus:outline-none focus:border-markit-orange focus:ring-1 focus:ring-markit-orange
                     transition-all duration-300 text-xs"
        />
        <button
          type="submit"
          className="w-full bg-markit-orange text-dark-bg font-amiko font-bold py-2 px-4 rounded-lg
                     hover:bg-opacity-80 hover:shadow-glow-orange text-xs
                     transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Stay <span className="italic">Tuned</span>
        </button>
      </form>
    </div>
  );
});

CTAForm.displayName = 'CTAForm'; // Good practice for forwardRef
export default CTAForm;