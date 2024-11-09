import { serialize } from 'cookie';

export default function handler(req, res) {
  const { username, password } = req.body;

  // Check credentials from env variables
  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    // Set a cookie to remember admin access
    res.setHeader('Set-Cookie', serialize('admin_auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 8, // 8 hours
      path: '/',
    }));
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
}
