import { Signup } from "./Signup";

export class SignupBuilder {
  name: string;
  email: string;
  password: string;
  age: number;
  photo: string;
  nickname: string;
  favoriteTopic: string[];
  isAdmin: boolean;
  isModerator: boolean;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = 0;
    this.photo = "";
    this.nickname = "";
    this.favoriteTopic = [];
    this.isAdmin = false;
    this.isModerator = false;
  }

  setNickName(nickname: string): SignupBuilder {
    this.nickname = nickname;
    return this;
  }

  setAge(age: number): SignupBuilder {
    this.age = age;
    return this;
  }

  setPhoto(photo: string): SignupBuilder {
    this.photo = photo;
    return this;
  }

  setFavoriteTopic(favoriteTopic: string[]): SignupBuilder {
    this.favoriteTopic = favoriteTopic;
    return this;
  }

  setIsAdmin(isAdmin: boolean): SignupBuilder {
    this.isAdmin = isAdmin;
    return this;
  }

  setIsModerator(isModerator: boolean): SignupBuilder {
    this.isModerator = isModerator;
    return this;
  }

  create(): Signup {
    return new Signup(
      this.name,
      this.email,
      this.password,
      this.age,
      this.photo,
      this.nickname,
      this.favoriteTopic,
      this.isAdmin,
      this.isModerator
    );
  }
}
