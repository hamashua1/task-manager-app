import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import tdRoutes from './routes/td.js';
import loginPageRoutes from './routes/loginPage.js';
import { connectDB } from './database/db.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(tdRoutes);
app.use(loginPageRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
