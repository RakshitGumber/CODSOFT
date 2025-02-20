export interface UserModel {
  _id: string;
  username: string;
  fullname: string;
  email: string;
  isEmailVerified: boolean;
  passwordHashed: string;
  profilepic: string;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
}
