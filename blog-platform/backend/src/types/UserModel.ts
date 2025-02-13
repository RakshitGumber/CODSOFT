export interface UserModel {
  _id: string;
  username: string;
  fullname: string;
  email: string;
  bio: string;
  isEmailVerified: boolean;
  passwordHashed: string;
  profilepic: string;
  createdAt: Date;
  updatedAt: Date;
}
