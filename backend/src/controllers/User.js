import User from "../schemas/User.js";
import File from "../database/index.js";

class UserController {
  async index(req, res) {
    return res.json({ message: "UserController Index" });
  }

  async store(req, res) {
    return res.json({ message: "UserController store" });
  }

  async update(req, res) {
    const user = await User.findById(req.user._id);
    user.overwrite(req.body);
    await user.save();

    const userReturn = Object.assign({}, user._doc);
    userReturn.file = {};

    File.gfs
      .find(
        {
          "metadata.userId": req.user.id,
        },
        { sort: { uploadDate: -1 } }
      )
      .toArray((err, files) => {
        if (!files || files.length === 0) {
          return res.json({ user: userReturn });
        }

        userReturn.file = files[0];
        return res.json({ user: userReturn });
      });
  }
}

export default new UserController();
