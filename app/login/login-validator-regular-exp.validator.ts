
import {ValidatorFn, AbstractControl} from "@angular/forms";

export class RegularExpValidator {
    static getValidator(validationName : String, nameReg: RegExp): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            const name = control.value;
            return nameReg.test(name) ? {validationName: {name}} : null;
        };
    }
}