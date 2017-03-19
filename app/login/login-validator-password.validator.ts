
import {Validators, ValidatorFn} from "@angular/forms";
import {RegularExpValidator} from "./login-validator-regular-exp.validator";

export class PasswordValidator {
    private static readonly ATLEAST_ONE_SPECIAL_CHAR_REGEX : RegExp= /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;

    static get validator() : ValidatorFn {
        return Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(15),
            RegularExpValidator.validator("inValidPassword", this.ATLEAST_ONE_SPECIAL_CHAR_REGEX)
        ]);
    }
}