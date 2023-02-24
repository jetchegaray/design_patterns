import { Signup } from "./Signup";
import { SignupBuilder } from "./SignupBuilder";

// old version of the object
const sigup = new Signup(
  "javito",
  "javito@gmail.com",
  "sdfkajlsdlkajs",
  23,
  "picture.jpg",
  "javito",
  ["nodejs", "javascript"],
  true,
  true
);

//new builder version

const signup: Signup = new SignupBuilder(
  "javito",
  "javito@gmail.com",
  "sdfkajlsdlkajs"
)
  .setAge(56)
  .setIsModerator(false)
  .setNickName("javito")
  .create();

console.log(signup);

const signup2: Signup = new SignupBuilder(
  "javito",
  "javito@gmail.com",
  "sdfkajlsdlkajs"
)
  .setIsModerator(true)
  .setIsAdmin(true)
  .create();

console.log(signup2);
