import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'wi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly loginService = inject(LoginService);
  private readonly fb = inject(FormBuilder);
  private readonly nnfb = this.fb.nonNullable;
  protected readonly form = this.nnfb.group({
    email: this.nnfb.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.nnfb.control('', Validators.required)
  });
  private readonly email = this.form.controls.email;
  private readonly password = this.form.controls.password;

  login() {
    console.log(this.form)
    if (this.form.valid) {
      const email = this.email.value!;
      const password = this.password.value!;
      this.loginService.loginWithEmailAndPassword(email, password).then(() => {
        const redirect = this.route.snapshot.queryParamMap.get('redirect');
        if (redirect) {
          this.router.navigateByUrl(redirect);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

}
