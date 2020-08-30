import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String },
    body: { type: String },
    username: { type: String },
    comments: [
      {
        body: { type: String },
        username: { type: String },
      },
      {
        timestamps: true,
      },
    ],

    likes: [
      {
        username: { type: String },
      },
      {
        timestamps: true,
      },
    ],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
