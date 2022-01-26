import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictatorRegisterComponent } from './components/dictator-register/dictator-register.component';

@NgModule({
  declarations: [
    AppComponent,
    DictatorRegisterComponent
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
