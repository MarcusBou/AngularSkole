import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDictatorComponent } from './Component/add-dictator/add-dictator.component';
import { ShowDictatorComponent } from './Component/show-dictator/show-dictator.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDictatorComponent,
    ShowDictatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
