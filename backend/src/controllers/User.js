import User from "../schemas/User.js";

class UserController {
  async index(req, res) {
    return res.json({ message: "UserController Index" });
  }

  async store(req, res) {
    // console.log(req.body);
    const newUser = await User.create({
      uiid: "7a9ff383-6bc9-4538-a69b-13b3b50410a4",
      name: "First",
      bio: "Bio of first user",
      phone: "000-000-000-151",
      email: "user@user.com",
      password_hash: "7a9ff383-6bc9-4538-a69b-13b3b50410a4",
    });

    return res.json({ message: "UserController store", newUser });
  }
}

export default new UserController();
