import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String
});

export const User = mongoose.model("User", UserSchema);
