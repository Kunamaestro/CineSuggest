import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpComponent } from "./components/auth_components/sign-up/sign-up.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  SignUpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CineSuggest';
}
