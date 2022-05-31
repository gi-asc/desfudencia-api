import { INumberValidator } from "../protocols"


export class NumberValidator implements INumberValidator {
    isValid(number: any): boolean {
        if(isNaN(number)){
            return false
        }
        return true
    };
}