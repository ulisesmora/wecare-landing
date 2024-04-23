import sgMail from '@sendgrid/mail';

sgMail.setApiKey('');

export default async function handler(req: any , res: any) {
  if (req.method === 'POST') {
    try {
      const { to, subject, text } = req.body;

      const msg = {
        to,
        from: 'your@example.com',
        subject,
        text,
      };

      await sgMail.send(msg);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}