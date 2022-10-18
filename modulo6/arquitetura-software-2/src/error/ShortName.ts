import { CustomError } from "./CustomError";

export class ShortName extends CustomError {
    constructor() {
        super(411, "O nome precisa ter pelo menos 3 caracteres")
    }
}