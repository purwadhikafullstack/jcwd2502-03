const jwt = require('jsonwebtoken');
const KEY = process.env.JWT_SECRET_KEY;
function adminMiddleware(req, res, next) {
  const token = req.token;

  if (!token) {
    return res.status(401).json({ message: 'Tidak ada token, akses ditolak' });
  }

  try {
    const decoded = jwt.verify(token, KEY);
    console.log(decoded);
    if (decoded.user.role !== 'Owner') {
      return res.status(403).json({ message: 'Hanya admin yang diizinkan mengakses' });
    }
    req.user = decoded.user;
    next();
  } catch (e) {
    res.status(500).json({ msg: 'Token tidak valid' });
  }
}

module.exports = adminMiddleware;
