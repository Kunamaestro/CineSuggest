import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForgottenPasswordComponent } from "./components/auth_components/forgotten-password/forgotten-password.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  ForgottenPasswordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CineSuggest';
}
