import { LoginComponent } from './login.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


describe('LoginComponent', () => {
    let fixture: ComponentFixture<LoginComponent>;
    let component: LoginComponent;
    const router = Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([]), ReactiveFormsModule],
            declarations: [LoginComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
    });

    it('should make the username control required', () => {
        const control = component.form.get('username');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('should make the password control required', () => {
        const control = component.form.get('password');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('username should have minimum 6 characters', () => {
        const control = component.form.get('username');
        control.setValue('12345');
        expect(control.valid).toBeFalsy();
    });

    it('password should have minimum 6 characters', () => {
        const control = component.form.get('password');
        control.setValue('12345');
        expect(control.valid).toBeFalsy();
    });

    it('password should match 123456', () => {
        const pwd = 123456;
        const control = component.form.get('password');
        control.setValue('123456');
        expect(+control.value).toBe(pwd);
    });

    it('should redirect to about page after clicking submit with correct credentials', () => {
        const navigateSpy = spyOn((<any>component).router, 'navigate');

        component.form.get('username').setValue('username');
        component.form.get('password').setValue('123456');
        component.onSubmit();
        expect(navigateSpy).toHaveBeenCalledWith(['/about']);

    });

    it('should not redirect to about page after clicking submit without username', () => {
        let navigateSpy = spyOn((<any>component).router, 'navigate');

        component.form.get('username').setValue('');
        component.form.get('password').setValue('12345');
        component.onSubmit();
        expect(navigateSpy).not.toHaveBeenCalledWith(['/about']);
    });

    it('should not redirect to about page after clicking submit with wrong password', () => {
        let navigateSpy = spyOn((<any>component).router, 'navigate');

        component.form.get('username').setValue('username');
        component.form.get('password').setValue('1234567');
        component.onSubmit();
        expect(navigateSpy).not.toHaveBeenCalledWith(['/about']);
    });

    it('should not redirect to about page after clicking submit without password', () => {
        let navigateSpy = spyOn((<any>component).router, 'navigate');

        component.form.get('username').setValue('username');
        component.form.get('password').setValue('');
        component.onSubmit();
        expect(navigateSpy).not.toHaveBeenCalledWith(['/about']);
    });

    it('should not redirect to about page after clicking submit without username and password', () => {
        let navigateSpy = spyOn((<any>component).router, 'navigate');

        component.form.get('username').setValue('');
        component.form.get('password').setValue('');
        component.onSubmit();
        expect(navigateSpy).not.toHaveBeenCalledWith(['/about']);
    });
})