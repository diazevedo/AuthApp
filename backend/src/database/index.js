import mongoose from "mongoose";

class Database {
  constructor() {
    this.mongo();
  }

  async mongo() {
    this.mongoConnection = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });

    this.mongoose = mongoose;

    this.gfs = new mongoose.mongo.GridFSBucket(this.mongoose.connection.db, {
      bucketName: "profile-images",
    });
  }
}

export default new Database();
