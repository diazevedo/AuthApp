import User from "../schemas/User.js";

class UserController {
  async index(req, res) {
    return res.json({ message: "UserController Index" });
  }

  async store(req, res) {
    return res.json({ message: "UserController store" });
  }
}

export default new UserController();
