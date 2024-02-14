import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const validationErrors: ValidationErrors = {};
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (password?.value !== confirmPassword?.value) {
    validationErrors['confirmPassword'] = 'Passwords don\'t match.';
    confirmPassword?.setErrors(validationErrors)
    return validationErrors;
  }
  confirmPassword?.setErrors(null);
  return null;
}

const passwordValidator: ValidatorFn = (
  control: AbstractControl<string>
): ValidationErrors | null => {
  const password = control.value;
  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const specialChars = /[!@#$%^&*()_+{}|:<>?~\-=\[\];,./]/g;
  const validationErrors: ValidationErrors = {};
  if (password.length < 1) {
    validationErrors['required'] = 'Password is required';
  }
  if (password.length < 6) {
    validationErrors['length'] = 'Password must be at least 6 characters';
  } 
  if (!lowerCaseLetters.test(password)) {
    validationErrors['lowerCaseLetters'] = 'Password must includes lower case letters';
  }
  if (!upperCaseLetters.test(password)) {
    validationErrors['upperCaseLetters'] = 'Password must includes upper case letters';
  }
  if (!numbers.test(password)) {
    validationErrors['numbers'] = 'Password must includes numbers';
  }
  if (!specialChars.test(password)) {
    validationErrors['specialChars'] = 'Password must includes specials characters (!@#$%^&*()_+{}|:<>?~-=[];,./\')';
  }
  return validationErrors ?? null;
}

@Component({
  selector: 'wi-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  private readonly fb = inject(FormBuilder);
  private readonly loginService = inject(LoginService);

  protected readonly form = this.fb.group({
    email: this.fb.control<string>('', [Validators.required, Validators.email]),
    name: this.fb.control<string>(''),
    password: this.fb.control<string>('', passwordValidator),
    confirmPassword: this.fb.control<string>('', [Validators.required])
  }, {
    validators: [confirmPasswordValidator]
  });

  protected readonly email = this.form.controls.email;
  protected readonly name = this.form.controls.name;
  protected readonly password = this.form.controls.password;
  protected readonly confirmPassword = this.form.controls.confirmPassword;

  register() {
    if (this.form.valid) {
      const email = this.email.value!;
      const password = this.password.value!;
      const displayedName = this.name.value!;
      this.loginService.register(email, password).then(() => {
        this.loginService.setDisplayedName(displayedName);
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

}
