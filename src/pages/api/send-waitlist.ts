import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, company, jobTitle, email, companyPhone, questions } = req.body;

  // Configure transporter (use environment variables for real deployment)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: 'chan@markittrade.com',
    subject: 'New Waitlist Submission',
    html: `
      <h2>Waitlist Submission</h2>
      <ul>
        <li><strong>First Name:</strong> ${firstName}</li>
        <li><strong>Last Name:</strong> ${lastName}</li>
        <li><strong>Company:</strong> ${company}</li>
        <li><strong>Job Title:</strong> ${jobTitle || '(not provided)'}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone Number:</strong> ${companyPhone || '(not provided)'}</li>
        <li><strong>Questions:</strong> ${questions || '(none)'}</li>
      </ul>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch {
    res.status(500).json({ error: 'Failed to send email.' });
  }
}
