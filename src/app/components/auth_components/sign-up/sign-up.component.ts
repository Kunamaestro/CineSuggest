import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterService } from '../../../services/router.service';
@Component({
  selector: 'app-sign-up',
  imports: [MatButtonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  constructor(public router:RouterService){}

}
