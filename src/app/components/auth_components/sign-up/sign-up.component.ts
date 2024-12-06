import { Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterService } from '../../../services/router.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'; //
import { JsonPipe } from '@angular/common';
import { AUTHENTIFICATION_RULES } from '../../../../models/rules/authentification_rules';
@Component({
  selector: 'app-sign-up',
  imports: [MatButtonModule,
    ReactiveFormsModule,
    JsonPipe,

  ],
  standalone:true,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  constructor(public router:RouterService){}

  ngOnInit(){
    this.setIsSamePasswordState()
  }

  identical = signal(false)
  form = new FormGroup({
    username : new FormControl(""),
    mail : new FormControl(""),
    password1 : new FormControl(""),
    password2 : new FormControl(""),
  })

  isSamePasswordState(){
    return this.identical()
  }

  setIsSamePasswordState(){
    this.identical.set((
      this.form.get("password1")?.value == this.form.get("password2")?.value 
    && this.form.get("password1")?.value != "") 
    ? true : false)
  }

  submitSubscription(){
    console.log("Let's go");
  }

}
