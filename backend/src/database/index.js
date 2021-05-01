import moongoose from "mongoose";

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = moongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
