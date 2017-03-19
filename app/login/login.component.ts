import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login-service";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {UserNameValidator} from "./login-validator-username.validator";
import {PasswordValidator} from "./login-validator-password.validator";

@Component({
    moduleId: module.id,
    selector: 'shopping-cart',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
    form : FormGroup;

    constructor(private loginService: LoginService,
                private formBuilder : FormBuilder) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            userName: new FormControl('', UserNameValidator.validator),
            password: this.formBuilder.control('', PasswordValidator.validator)
        })
        this.form.valueChanges
            .subscribe(data => this.onValueChanged(data));
    }

    submit() {
        console.log("Reactive Form submitted: ", this.form.valid);
    }

    onValueChanged(data?: any) {
        if (!this.form) { return; }
        const form = this.form;

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'userName': '',
        'password': ''
    };

    validationMessages = {
        'userName': {
            'required':      'User name is required.',
            'inValidUserName': 'Given email is not a valid email.'
        },
        'password': {
            'required': 'Password is required.',
            'minlength':     'Password length must be at least 4.',
            'maxlength':     'Password lenghth cannot be more than 15.',
            'inValidPassword': 'Password must contain a special character.'
        }
    };
}
