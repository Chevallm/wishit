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
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
