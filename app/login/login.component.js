"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var login_validator_username_validator_1 = require("./login-validator-username.validator");
var login_validator_password_validator_1 = require("./login-validator-password.validator");
var LoginComponent = (function () {
    function LoginComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.formErrors = {
            'userName': '',
            'password': ''
        };
        this.validationMessages = {
            'userName': {
                'required': 'User name is required.',
                'pattern': 'Given email is not a valid email.'
            },
            'password': {
                'required': 'Password is required.',
                'minlength': 'Password length must be at least 8.',
                'maxlength': 'Password lenghth cannot be more than 15.',
                'pattern': 'Password must contain a special character.'
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            userName: new forms_1.FormControl('', login_validator_username_validator_1.UserNameValidator.validator),
            password: new forms_1.FormControl('', login_validator_password_validator_1.PasswordValidator.validator)
        });
        this.form.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
    };
    LoginComponent.prototype.submit = function () {
        this.router.navigate(['/landing']);
        ;
    };
    LoginComponent.prototype.onValueChanged = function (data) {
        if (!this.form) {
            return;
        }
        var form = this.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'shopping-cart',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
