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
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 rounded-md bg-dark-bg/50 border border-glass-border text-lg text-off-white placeholder-gray-400 focus:outline-none focus:border-markit-orange"
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-markit-orange text-dark-bg text-lg font-bold rounded-md hover:bg-opacity-90 transition-colors"
        >
          Get Updates
        </button>
      </form>
      {message && (
        <p className={`mt-3 text-base text-center ${message.startsWith('Error:') ? 'text-red-400' : 'text-green-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
});

CTAForm.displayName = 'CTAForm';
export default CTAForm;