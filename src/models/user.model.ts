import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true}
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
