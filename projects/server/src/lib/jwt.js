const jwt = require("jsonwebtoken");

const KEY = process.env.JWT_SECRET_KEY;

const generateToken = (payload) => {
  try {
    const tokens = jwt.sign(payload, KEY, { expiresIn: "12h" });
    return tokens;
  } catch (error) {
    return error;
  }
};

const verifyToken = (tokens) => {
  const isVerified = jwt.verify(tokens, KEY);
  return isVerified;
};

module.exports = { generateToken, verifyToken };
