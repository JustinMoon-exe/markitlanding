import React, { useState } from 'react';

interface WaitlistFormProps {
  onClose: () => void;
}

export default function WaitlistForm({ onClose }: WaitlistFormProps) {
  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone: string) {
    if (!phone) return true; // optional
    return /^\+?[0-9\-\s()]{7,}$/.test(phone);
  }
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    companyPhone: '',
    questions: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    // Validate required fields
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.company.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!validatePhone(form.companyPhone)) {
      setError('Please enter a valid phone number.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/send-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Failed to submit. Please try again.');
      }
    } catch {
      setError('Failed to submit. Please try again.');
    }
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div className="waitlist-form-success">
        <h2>Thank you!</h2>
        <p>Your info has been sent. We&apos;ll be in touch soon.</p>
        <button className="btn" onClick={onClose}>Close</button>
      </div>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit}>
      <div className="form-row" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input name="firstName" type="text" placeholder="First Name" value={form.firstName} onChange={handleChange} required style={{ flex: 2, height: '2.7rem', padding: '0.7rem 1.2rem', width: '400px '}} />
        <input name="lastName" type="text" placeholder="Last Name" value={form.lastName} onChange={handleChange} required style={{ flex: 2, height: '2.7rem', padding: '0.7rem 1.2rem', width: '400px' }} />
      </div>
      <div className="form-row" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required style={{ flex: 1, height: '2.7rem', padding: '0.7rem 1.2rem', minWidth: '0', width: '150%' }} />
        <input name="companyPhone" type="tel" placeholder="Phone (optional)" value={form.companyPhone} onChange={handleChange} style={{ flex: 1, height: '2.7rem', padding: '0.7rem 1.2rem', minWidth: '0', width: '200%' }} />
      </div>
      <div className="form-row" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input name="company" type="text" placeholder="Company" value={form.company} onChange={handleChange} required style={{ flex: 1, height: '2.7rem', padding: '0.7rem 1.2rem', width: '50%' }} />
        <input name="jobTitle" type="text" placeholder="Job Title (optional)" value={form.jobTitle} onChange={handleChange} style={{ flex: 1, height: '2.7rem', padding: '0.7rem 1.2rem', width: '50%' }} />
      </div>
      <div className="form-row" style={{ marginBottom: '1.2rem' }}>
        <textarea name="questions" placeholder="Questions? (optional)" value={form.questions} onChange={handleChange} style={{ width: '100%', height: '10rem', resize: 'vertical', fontSize: '1rem', padding: '0.7rem' }} />
      </div>
      {error && <div className="form-error">{error}</div>}
      <p style={{ fontSize: '1rem', color: '#666', textAlign: 'center' }}>
        Contact chan@markittrade.com with any questions
      </p>
      <div className="form-actions" style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
        <button className="btn primary" type="submit" disabled={submitting} style={{ padding: '0.7rem 2rem' }}>{submitting ? 'Submitting...' : 'Submit'}</button>
        <button className="btn ghost" type="button" onClick={onClose} style={{ padding: '0.7rem 2rem' }}>Cancel</button>
      </div>
    </form>
  );
}
