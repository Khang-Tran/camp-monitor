import passport from 'passport';
import PassportStrategy from 'passport-google-oauth20';

import User from '../models/User';

const GoogleStrategy = PassportStrategy.Strategy;

passport.use(
	'google',
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
			clientSecret: process.env.GOOGLE_OAUTH_SECRET,
			callbackURL: '/auth/google/callback'
		},
		async (accessToken, refreshToken, profile, done) => {
			// TODO: write tests for this
			const user = await User.findOne({ googleId: profile.id });
			// TODO: handle error
			if (user) {
				done(null, user);
			} else {
				try {
					const newUser = await new User({ googleId: profile.id }).save();
					done(null, newUser);
				} catch (e) {}
			}
		}
	)
);

// TODO: dig deeper into passport

// TODO: handle errors
passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
	const user = await User.findById(userId);
	if (user) {
		done(null, user);
	}
});

export default passport;
