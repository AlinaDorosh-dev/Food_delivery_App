import jwt from "jsonwebtoken";

export const generateToken = (user, secret, expiresIn) => {
  const { id, email } = user; // destructuring
  return jwt.sign({ id, email }, secret, { expiresIn });
};

export const getTokenPayload = (token) => {
  return jwt.verify(token, process.env.SECRET);
};
