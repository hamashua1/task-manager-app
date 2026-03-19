import { UserModel } from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!password || password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters' });
    }
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const user = new UserModel({ name, email, password: hashPassword });
    await user.save();
    res.status(201).json({ message: 'Account created successfully' });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: 'Email or password already exist' });
    }
    res.status(500).json({ message: 'Failed to create account' });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 1000,
    });
    res.status(200).json({ message: 'Sign in successful' });
  } catch (err) {
    res.status(500).json({ message: 'Sign in failed' });
  }
};
