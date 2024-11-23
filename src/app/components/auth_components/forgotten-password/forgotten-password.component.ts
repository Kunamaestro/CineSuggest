import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterService } from '../../../services/router.service';

@Component({
  selector: 'app-forgotten-password',
  imports: [
    MatButtonModule,

  ],
  templateUrl: './forgotten-password.component.html',
  styleUrl: './forgotten-password.component.scss'
})
export class ForgottenPasswordComponent {

  constructor(public router : RouterService){}

}
