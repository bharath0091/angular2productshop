
import {Validators, ValidatorFn, AbstractControl} from "@angular/forms";
import {RegularExpValidator} from "./login-validator-regular-exp.validator";

export class UserNameValidator {
    private static readonly VALID_EMAIL_REGEX : RegExp= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    static get validator() : ValidatorFn {
        return Validators.compose([
            Validators.required,
            RegularExpValidator.validator("inValidUserName", this.VALID_EMAIL_REGEX)
            ]);
    }
}