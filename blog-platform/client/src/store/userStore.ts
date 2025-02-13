import { atom } from "nanostores";
import type { IUser } from "../types/UserType";

export const $users = atom<IUser>({
  _id: "",
  username: "",
  fullname: "",
  profilepic: "",
  email: "",
});

export const setUser = (user: IUser) => {
  $users.set(user);
};
