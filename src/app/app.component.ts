import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { HeaderComponent } from "./components/structural_sections/header/header.component";
import { FooterComponent } from "./components/structural_sections/footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CineSuggest';
  constructor(private location: Location){}

  displayStructuralSection(){
    const firstPath = this.location.path().split("/")[1]
    switch(firstPath){
      case "login":return false;
      case "signup":return false;
      case "resetpassword":return false;
      default: return true;
    }
    
  }
}


