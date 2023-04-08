import jwt from 'jsonwebtoken';
import { UnAuthenticatedError } from '../errors/index.js';

const auth = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) throw new UnAuthenticatedError('Authentication invalid');

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const testUser = payload.userId === '6430b1ff9a774bca35e68579';
    req.user = { userId: payload.userId, testUser };
    next();
  } catch (error) {
    throw new UnAuthenticatedError('Authentication invalid');
  }
};

export default auth;
