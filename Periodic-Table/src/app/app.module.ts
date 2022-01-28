import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeriodicTableComponent } from './Component/periodic-table/periodic-table.component';
import { ShowAtomInfoComponent } from './Component/show-atom-info/show-atom-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PeriodicTableComponent,
    ShowAtomInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
