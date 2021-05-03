import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

import User from "../schemas/User.js";

/** it might go to a single file and then import it in routes or app.js */
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_APP_SECRET,
      callbackURL: `${process.env.APP_URL}/auth/google/callback`,
    },
    async function (accessToken, refreshToken, profile, done) {
      const user = await User.findOne({ uiid: profile.id });

      if (user) return done(null, user);

      const userCreated = await User.create({
        uiid: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
      });

      return done(null, userCreated);
    }
  )
);
