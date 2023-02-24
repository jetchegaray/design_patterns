import { User } from "./User";
import { UserPreferences } from "./UserPreferences";

export class Signup {
  user: User;
  preferences: UserPreferences;

  constructor(
    name: string,
    email: string,
    password: string,
    age: number,
    photo: string,
    nickname: string,
    favoriteTopic: string[],
    isAdmin: boolean,
    isModerator: boolean
  ) {
    //supposed these are hitting to the DB
    this.user = new User(name, email, password);
    this.preferences = new UserPreferences(
      this.user,
      age,
      photo,
      nickname,
      favoriteTopic,
      isAdmin,
      isModerator
    );
  }
}
