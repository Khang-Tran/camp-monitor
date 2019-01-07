import passport from 'passport';
import PassportStrategy from 'passport-google-oauth20';

const GoogleStrategy = PassportStrategy.Strategy;


passport.use('google',
   new GoogleStrategy({
      clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET,
      callbackURL: '/auth/google/callback'
   }, (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
   }));

export default passport;
