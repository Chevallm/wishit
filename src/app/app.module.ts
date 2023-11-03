import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { ColorMapPipe } from './pipes/color-map.pipe';
import { TextColorMapPipe } from './pipes/text-color-map.pipe';
import { InputComponent } from './components/input/input.component';
import { NewComponent } from './views/new/new.component';
import { FiPipe, IconComponent } from './components/icon/icon.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
