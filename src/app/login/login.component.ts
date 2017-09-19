import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    errors: String;
    form: FormGroup;
    constructor(fb: FormBuilder, private router: Router) {
        this.form = fb.group({
            username: new FormControl('', [
                Validators.required,
                Validators.minLength(6)
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6)
            ])
        });
    }

    get username() {
        return this.form.get('username');
    }
    get password() {
        return this.form.get('password');
    }

    onSubmit() {
        const pwd = this.password.value;
        if (pwd && pwd.length > 5 && +pwd === 123456) {
            this.router.navigate(['/about']);
        } else {
            this.errors = 'Invalid Login Credentials';
        }
    }
}
