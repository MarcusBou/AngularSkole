import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipingTranslatorComponent } from './components/piping-translator/piping-translator.component';
import { MorseCodePipe } from './pipes/morse-code.pipe';
import { MD5Pipe } from './pipes/md5.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipingTranslatorComponent,
    MorseCodePipe,
    MD5Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
