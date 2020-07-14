import { User } from "../../../db/models";

const createUserResolver =
    (context: any, { username, password, email, phone }:
        { username: string, password: string, email: string, phone: string}) => {
        return User.create({ username,password, email,phone });
    };

export default createUserResolver;
