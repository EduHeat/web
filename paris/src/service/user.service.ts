import { DocumentDefinition, FilterQuery } from 'mongoose';
import { User } from '../model';
import { UserDocument } from '../model/user.model';

export const createUser = async (input: DocumentDefinition<UserDocument>) => {
  try {
    return await User.create(input);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const findUser = async (query: FilterQuery<UserDocument>) => {
  try {
    return await User.findOne(query);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const deleteUser = async (id: string) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const validatePassword = async ({
  email,
  password,
}: {
  email: UserDocument['email'];
  password: string;
}) => {
  const user  = await User.findOne({ email })

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) {
    return false;
  }

  return user.toJSON();
};
