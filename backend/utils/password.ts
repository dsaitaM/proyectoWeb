import { MinLength, IsNotEmpty, IsEmail } from "class-validator";
import * as bcrypt from 'bcryptjs';



export class password {


    hashPassword(pw:string):void{
        const salt = bcrypt.genSaltSync(10);
        pw = bcrypt.hashSync(pw, salt);
    }

    checkPassword(password:string,pw:string):boolean{
        return bcrypt.compareSync(password, pw);
    }
}