"use client";

import { useState, forwardRef } from 'react';

const CTAForm = forwardRef<HTMLDivElement>((props, ref) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(''); // To display success or error messages

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission (which causes page reload)
    setIsSubmitting(true);
    setMessage(''); // Clear previous messages

    const formData = {
      email: email, // Or new FormData(form) if you have more fields and want to use FormData
      // You can add other fields Formspree might expect, like _subject
      // _subject: "New Stay Informed Signup from MarkIt",
    };

    try {
      // Replace with your ACTUAL Formspree endpoint URL
      const response = await fetch("https://formspree.io/f/mwpbolyl", { // <<-- IMPORTANT: PUT YOUR FORM ID HERE
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // If sending JSON
          'Accept': 'application/json'       // Formspree AJAX expects this for JSON response
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // const result = await response.json(); // Formspree might return data
        setMessage(`Thank you! ${email} has been noted. We'll be in touch.`);
        setEmail(''); // Clear the input field
      } else {
        // Try to parse error from Formspree if any
        const errorData = await response.json().catch(() => ({})); // Handle cases where response isn't JSON
        const errorMessage = errorData.errors?.map((err: { message: string }) => err.message).join(', ')
                             || errorData.error
                             || 'Oops! There was a problem submitting your form.';
        setMessage(`Error: ${errorMessage}`);
        console.error("Formspree error:", errorData);
      }
    } catch (error) {
      setMessage('Error: Failed to submit. Please try again.');
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={ref} className="glass-card h-full w-full p-4 flex flex-col justify-center">
      <h3 className="font-krona text-base text-off-white text-center mb-3 uppercase tracking-wider">
        Stay <span className="text-markit-orange">Informed</span>
      </h3>
      {/*
        The 'action' and 'method' on the form tag are not strictly needed
        when using e.preventDefault() and fetch, but it's good practice
        for accessibility and as a fallback if JavaScript fails.
        However, for Formspree, the fetch URL is the most important.
      */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          name="email" // 'name' attribute is still good for FormData and accessibility
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={isSubmitting}
          className="w-full bg-transparent border border-white/20 rounded-lg px-3 py-2 text-off-white placeholder-gray-400
                     focus:outline-none focus:border-markit-orange focus:ring-1 focus:ring-markit-orange
                     transition-all duration-300 text-sm"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-markit-orange text-dark-bg font-amiko font-bold py-2 px-4 rounded-lg
                     hover:bg-opacity-80 hover:shadow-glow-orange text-sm
                     transition-all duration-300 transform hover:-translate-y-0.5
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : <>Stay <span className="italic">Tuned</span></>}
        </button>
      </form>
      {message && (
        <p className={`mt-3 text-sm text-center ${message.startsWith('Error:') ? 'text-red-400' : 'text-green-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
});

CTAForm.displayName = 'CTAForm';
export default CTAForm;