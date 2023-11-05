const jwt = require('jsonwebtoken');
const KEY = process.env.JWT_SECRET_KEY;
const {verifyToken} = require("../lib/jwt")
const db = require("../models")

module.exports = {
  ownerMiddleware : async (req, res, next) => {
    const token = req.token;
    if (!token) {
      return res.status(401).json({ message: 'Tidak ada token, akses ditolak' });
    }
  
    try {
      const decoded = verifyToken(token);
      const data = await db.users.findByPk(decoded.id)
      if (data.dataValues.role !== 'Owner') {
        return res.status(403).json({ message: 'Hanya Owner yang diizinkan mengakses' });
      }
      req.user = decoded.user;
      next();
    } catch (e) {
      res.status(500).json({ msg: 'Token tidak valid' });
    }
  }
}


// module.exports = adminMiddleware;
