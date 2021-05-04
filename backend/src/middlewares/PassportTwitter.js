import passport from "passport";
import TwitterStrategy from "passport-twitter";

import User from "../schemas/User.js";

class PassportTwitter {
  constructor() {
    this.consumerKey = process.env.TWITTER_APP_KEY;
    this.consumerSecret = process.env.TWITTER_SECRET;
    this.callbackURL = `/auth/twitter/callback`;

    this.passport();
  }

  passport() {
    passport.use(
      new TwitterStrategy(
        {
          consumerKey: this.consumerKey,
          consumerSecret: this.consumerSecret,
          callbackURL: this.callbackURL,
        },
        async function (accessToken, refreshToken, profile, done) {
          const user = await User.findOne({ uiid: profile.id });

          if (user) return done(null, user);

          const userCreated = await User.create({
            uiid: profile.id,
            name: profile.displayName,
            bio: profile._json.description,
          });

          return done(null, userCreated);
        }
      )
    );
  }
}

export default new PassportTwitter();
