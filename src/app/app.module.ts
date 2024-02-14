import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { ColorMapPipe } from './pipes/color-map.pipe';
import { TextColorMapPipe } from './pipes/text-color-map.pipe';
import { InputComponent } from './components/input/input.component';
import { NewComponent } from './views/new/new.component';
import { FiPipe, IconComponent } from './components/icon/icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishComponent } from './components/wish/wish.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ShouldShowErrorsPipe } from './pipes/should-show-errors.pipe';
import { IterableValidationErrorsPipe } from './pipes/iterable-validation-errors.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ButtonComponent,
        ColorMapPipe,
        TextColorMapPipe,
        InputComponent,
        NewComponent,
        IconComponent,
        FiPipe,
        WishComponent,
        AccountComponent,
        LoginComponent,
        RegisterComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DragDropModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        provideFirebaseApp(() => initializeApp({
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
        provideFirestore(() => getFirestore()),
        IterableValidationErrorsPipe,
        ShouldShowErrorsPipe,
    ]
})
export class AppModule { }
