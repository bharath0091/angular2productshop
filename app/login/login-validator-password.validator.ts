
import {Validators, ValidatorFn} from "@angular/forms";

export class PasswordValidator {
    private static readonly ATLEAST_ONE_SPECIAL_CHAR_REGEX : RegExp= /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;

    static get validator() : ValidatorFn[] {
        return [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(15),
            Validators.pattern(this.ATLEAST_ONE_SPECIAL_CHAR_REGEX)
        ];
    }
}