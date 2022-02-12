import mongoose from 'mongoose';
import { UserDocument } from './user.model';

export interface CommentDocument extends mongoose.Document {
  user: UserDocument['_id'];
  username: string;
  content: string;
};

export interface PostDocument extends mongoose.Document {
  user: UserDocument['_id'];
  title: string;
  body: string;
  likes: string[];
  comments: [CommentDocument];
  createdAt: Date;
  updatedAt: Date;
}

const CommentSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => new mongoose.Types.ObjectId(),
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const PostSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => new mongoose.Types.ObjectId(),
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    body: { type: String, required: true },
    likes: { type: [String], default: [], required: false },
    comments: { type: [CommentSchema], default: [], required: false }
  },
  { timestamps: true }
);

const Post = mongoose.model<PostDocument>('Forum', PostSchema);

export default Post;
