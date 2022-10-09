import PersonInterface from "./PersonInterface";

export default interface UserInterface extends PersonInterface {
    email: string;
    password: string;
}