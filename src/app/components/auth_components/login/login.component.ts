import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterService } from '../../../services/router.service';


@Component({
  selector: 'app-login',
  imports: [
    MatButtonModule,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    
  constructor(public router : RouterService){}

}
