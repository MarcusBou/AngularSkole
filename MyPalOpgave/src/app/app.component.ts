import { Component } from '@angular/core';
import { Pal } from './interface/pal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPalOpgave';
  Nicklas: Pal = {path: "assets/img/WIN_20220124_11_05_14_Pro.jpg", name: "Nicklas", text: "Er ny i skolepraktikken"}
  
}
