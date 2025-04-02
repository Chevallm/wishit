import { Component, OnInit, inject } from '@angular/core';
import { User } from '@angular/fire/auth';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'wi-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
    standalone: false
})
export class AccountComponent implements OnInit {

  protected readonly loginService = inject(LoginService);

  currentUser: User | null = null;

  ngOnInit(): void {
    this.loginService.auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        this.currentUser = currentUser;
      } else {
        this.currentUser = null;
      }
    })
  }

}
