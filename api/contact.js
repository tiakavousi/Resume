// Vercel serverless function for contact form
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }

  try {
    const data = req.body;
    
    // Validate request data
    if (!data || !data.name || !data.email || !data.message || 
        data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
      return res.status(400).json({ msg: 'Please fill all the fields' });
    }

    // Email functionality is temporarily disabled
    // To enable it, add GOOGLE_EMAIL and GOOGLE_PASS environment variables in Vercel
    /*
    const smtpTransporter = nodemailer.createTransport({
      service: 'Gmail',
      port: 465,
      auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASS
      }
    });

    const mailOptions = {
      from: data.email,
      to: process.env.GOOGLE_EMAIL,
      subject: `Message from ${data.name}`,
      html: `
      <h3>Information:</h3>
      <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
      </ul>
      <h3>Message:</h3>
      <p>${data.message}</p>`
    };

    await smtpTransporter.sendMail(mailOptions);
    */

    // Temporary success response while email is disabled
    return res.status(200).json({ msg: 'Thank you for contacting me, I\'ll get back to you soon' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ msg: 'There is a server error' });
  }
};
