import { DocumentDefinition } from "mongoose";
import { User } from "../model";
import { UserDocument } from "../model/user.model";

export const createUser = async (input: DocumentDefinition<UserDocument>) => {
  try {
    return await User.create(input);
  } catch (err: any) {
    throw new Error(err);
  }
}

export const findUser = async (id: string) => {
  try {
    return await User.findById(id);
  } catch (err: any) {
    throw new Error(err);
  } 
}

export const deleteUser = async (id: string) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch(err: any) {
    throw new Error(err);
  }
}