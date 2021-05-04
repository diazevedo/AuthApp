import passport from "passport";
import FacebookStrategy from "passport-facebook";

import User from "../schemas/User.js";

class PassportFacebook {
  constructor() {
    this.clientID = process.env.FACEBOOK_APP_ID;
    this.clientSecret = process.env.FACEBOOK_APP_SECRET;
    this.callbackURL = `${process.env.APP_URL}/auth/facebook/callback`;

    this.passport();
  }

  passport() {
    passport.use(
      new FacebookStrategy(
        {
          clientID: this.clientID,
          clientSecret: this.clientSecret,
          callbackURL: this.callbackURL,
          profileFields: [
            "id",
            "displayName",
            "name",
            "picture.type(large)",
            "email",
          ],
        },
        async function (accessToken, refreshToken, profile, done) {
          const user = await User.findOne({ uiid: profile.id });

          if (user) return done(null, user);

          const userCreated = await User.create({
            uiid: profile.id,
            name: profile.name.givenName + " " + profile.name.familyName,
            email: profile.emails[0].value,
          });

          return done(null, userCreated);
        }
      )
    );
  }
}

export default new PassportFacebook();
