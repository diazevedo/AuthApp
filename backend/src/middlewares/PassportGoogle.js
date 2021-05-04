import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";

import User from "../schemas/User.js";

class PassportGoogle {
  constructor() {
    this.clientID = process.env.GOOGLE_CLIENT_ID;
    this.clientSecret = process.env.GOOGLE_APP_SECRET;
    this.callbackURL = `${process.env.APP_URL}/auth/google/loggedin`;

    this.passport();
  }

  passport() {
    passport.use(
      new GoogleStrategy(
        {
          clientID: this.clientID,
          clientSecret: this.clientSecret,
          callbackURL: this.callbackURL,
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
  }
}

export default new PassportGoogle();
