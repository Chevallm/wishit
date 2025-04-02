import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NewComponent } from './views/new/new.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new', component: NewComponent, ...canActivate(redirectUnauthorizedToLogin)},
  {path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToHome)},
  {path: 'register', component: RegisterComponent, ...canActivate(redirectLoggedInToHome)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
