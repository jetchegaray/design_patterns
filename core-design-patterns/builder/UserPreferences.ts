import { User } from "./User";

export class UserPreferences {
  user: User;
  age: number;
  photo: string;
  nickname: string;
  favoriteTopic: string[];
  isAdmin: boolean;
  isModerator: boolean;

  constructor(
    user: User,
    age: number,
    photo: string,
    nickname: string,
    favoriteTopic: string[],
    isAdmin: boolean,
    isModerator: boolean
  ) {
    this.user = user;
    this.age = age;
    this.photo = photo;
    this.nickname = nickname;
    this.favoriteTopic = favoriteTopic;
    this.isAdmin = isAdmin;
    this.isModerator = isModerator;
  }
}
