import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, UserCredential, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public readonly auth: Auth = inject(Auth);

  constructor() { }

  loginWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  setDisplayedName(displayedName: string): Promise<boolean> {
    return this.auth.updateCurrentUser({
      ...this.auth.currentUser!,
      displayName: displayedName
    })
    .then(() => true, () => false);
  }

  signOff() {
    return signOut(this.auth);
  }
}
