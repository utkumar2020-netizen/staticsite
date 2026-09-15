'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const project = formData.get('project') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, message: 'Please fill all required fields.' };
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVING_EMAIL || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Project Enquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${project || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
Name: ${name}
Email: ${email}
Project Type: ${project || 'Not specified'}

Message:
${message}
      `,
    });

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, message: 'Failed to send message. Please try again later.' };
  }
}