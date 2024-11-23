import { Injectable } from '@angular/core';
import {Router} from '@angular/router'; 


@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }



  ///////////////////  Authentification  ////////////////////


  loginPage(){
    this.router.navigate(['/login'])
  }

  signUpPage(){
    this.router.navigate(['/signup'])
  }

  forgottenPasswordPage(){
    this.router.navigate(['/resetpassword'])
  }

  ///////////////   APP   ////////////////////////////



}
