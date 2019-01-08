import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config({ path: '../../.env' });
require('./config/passport');

const app = express();

app.use(
	cookieSession({
		maxAge: 7 * 24 * 60 * 60 * 1000,
		secret: process.env.COOKIE_SECRET
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth/google', authRoutes);
app.use('/api/users', userRoutes);

mongoose
	.connect(
		process.env.MONGO_URI,
		{ useNewUrlParser: true }
	)
	.then(() => console.log('MongoDB database connected..'))
	.catch(err =>
		console.log(`Errors occurred when tried to connect the database. ${err}`)
	);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`🚀 Server ready at ${PORT}`);
});
