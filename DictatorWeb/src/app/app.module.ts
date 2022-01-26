import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDictatorComponent } from './Component/add-dictator/add-dictator.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDictatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormBuilder,
    ReactiveFormsModule,
    Validators
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
