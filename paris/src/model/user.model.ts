import mongoose from 'mongoose'
import { Branch, Year } from '../lib';
import bcrypt from 'bcrypt';

export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  branch: Branch;
  year: Year;
  reg_no: number;
  avatar_link: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    branch: { type: String, required: true },
    reg_no: { type: Number, required: true, unique: true },
    year: { type: String, required: true },
    avatar_link: { type: String, required: true },
  },
  { timestamps: true }
)

UserSchema.pre("save", async function (next) {
  let user = this as UserDocument;
  
  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(12);

  const hash = bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
})

UserSchema.methods.comparePassword = async function(candidatePassword: string) {
  const user = this as UserDocument;

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
}

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;