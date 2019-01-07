import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import PassportStrategy from 'passport-google-oauth20';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

const GoogleStrategy = PassportStrategy.Strategy;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

app.get('/auth/google', passport.authenticate('google', {
   scope: ['profile', 'email']
}, () => console.log('connected')));

app.get('/auth/google/callback', passport.authenticate('google'));

app.get('/', (req, res) => {
   res.send({ hi: 'HelloWorld' });
});


/* mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
   .then(() => console.log('MongoDB database connected..'))
   .catch(err =>
      console.log(`Errors occur when tried to connect the database: ${err}`));
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log(`🚀 Server ready at ${PORT}`);
});


// https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=853428296710-m7cfisbnf23hum38piklmvr59pnnbehe.apps.googleusercontent.com
