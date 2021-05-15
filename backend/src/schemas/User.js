import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  uiid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: false,
    default: "",
  },
  phone: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
    default: "",
  },
  password_hash: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre("save", (next) => {
  console.log("PASSWORD WILL BE ADDED HERE");
  next();
});

export default mongoose.model("User", UserSchema);
