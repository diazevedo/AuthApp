import passport from "passport";
import GithubStrategy from "passport-github2";

import User from "../schemas/User.js";

class PassportGithub {
  constructor() {
    this.clientID = process.env.GITHUB_APP_KEY;
    this.clientSecret = process.env.GITHUB_CLIENT_SECRET;
    this.callbackURL = `${process.env.APP_URL}/auth/github/callback`;

    this.passport();
  }

  passport() {
    passport.use(
      new GithubStrategy(
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
            bio: profile._json.bio || "",
          });

          return done(null, userCreated);
        }
      )
    );
  }
}

export default new PassportGithub();
