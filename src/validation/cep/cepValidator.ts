import { ICepValidator } from "../protocols/ICepValidator";

export class CepValidator implements ICepValidator{
    isValid(cep: any): boolean {
        if(String(cep).length != 8 || isNaN(cep)){
            return false
        }
        return true
    }

}