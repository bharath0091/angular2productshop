
import {Validators, ValidatorFn} from "@angular/forms";

export class UserNameValidator {
    private static readonly VALID_EMAIL_REGEX : RegExp= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    static get validator() : ValidatorFn[] {
        return [Validators.required,
            Validators.pattern(this.VALID_EMAIL_REGEX)
        ];
    }
}