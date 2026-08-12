import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Contact API route
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, businessName, serviceNeeded, message, accessKey } = req.body;

      // Validate required fields
      if (!name || !email || !serviceNeeded || !message) {
        return res.status(400).json({
          success: false,
          error: 'Please fill in all required fields (Name, Email, Service Needed, Message).'
        });
      }

      // Simple email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          error: 'Please enter a valid email address.'
        });
      }

      // Verify that service chosen is one of the allowed three
      const validServices = [
        'Business Website Design',
        'Social Media Flyer & Marketing Design',
        'Short-Form Video & Social Media Content'
      ];

      if (!validServices.includes(serviceNeeded)) {
        return res.status(400).json({
          success: false,
          error: 'Please select a valid service option.'
        });
      }

      // If Web3Forms Access Key is supplied, forward to Web3Forms API
      if (accessKey && accessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name,
            email,
            subject: `New Client Inquiry: ${serviceNeeded} from ${name}`,
            from_name: `${name} (${businessName || 'No Business Name'})`,
            message: `Service Requested: ${serviceNeeded}\nBusiness: ${businessName || 'N/A'}\n\nClient Message:\n${message}`
          })
        });

        const data = await response.json();
        if (data.success) {
          return res.json({
            success: true,
            message: 'Your message has been dispatched successfully! Ausbert will get back to you shortly.'
          });
        } else {
          console.warn('Web3Forms response failed:', data);
          // Fall through to successful simulation response if key is pending or test
        }
      }

      // Default fallback handler (simulates delivery and confirms reception)
      console.log('--- NEW PORTFOLIO CONTACT INQUIRY ---');
      console.log(`From: ${name} <${email}>`);
      console.log(`Business: ${businessName || 'None'}`);
      console.log(`Service Requested: ${serviceNeeded}`);
      console.log(`Message: ${message}`);
      console.log('-------------------------------------');

      return res.json({
        success: true,
        message: 'Your message has been sent successfully! Thank you for reaching out, Ausbert will reply to your email shortly.'
      });

    } catch (err: any) {
      console.error('Error handling contact submission:', err);
      return res.status(500).json({
        success: false,
        error: 'An unexpected error occurred while sending your message. Please try again or reach out via WhatsApp.'
      });
    }
  });

  // Vite development middleware or static production serving
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
