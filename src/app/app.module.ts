import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {ShouldShowErrorsPipe} from './pipes/should-show-errors.pipe';
import {IterableValidationErrorsPipe} from './pipes/iterable-validation-errors.pipe';

@NgModule({
  providers: [provideFirebaseApp(() => initializeApp({
    "projectId": "wishit-8b792",
    "appId": "1:418892217693:web:e8362c3e93fd66efbabcb4",
    "databaseURL": "https://wishit-8b792-default-rtdb.europe-west1.firebasedatabase.app",
    "storageBucket": "wishit-8b792.appspot.com",
    "apiKey": "AIzaSyD94F9XrPTBKzFKc-xEFLtVQVgeZFD_bi4",
    "authDomain": "wishit-8b792.firebaseapp.com",
    "messagingSenderId": "418892217693",
    "measurementId": "G-GX02HPVVXX"
  })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),],
  bootstrap: [],
  exports: [],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    IterableValidationErrorsPipe,
    ShouldShowErrorsPipe,
  ]
})
export class AppModule {
}
