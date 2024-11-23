import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: ()=> import("./components/home/home.component").then(c => c .HomeComponent),
    },
    {
        path: 'login',
        loadComponent: ()=> import("./components/auth_components/login/login.component").then(c => c .LoginComponent),
        
    },
    {
        path: 'signup',
        loadComponent: ()=> import("./components/auth_components/sign-up/sign-up.component").then(c => c .SignUpComponent)
    },
    {
        path: 'resetpassword',
        loadComponent: ()=> import("./components/auth_components/forgotten-password/forgotten-password.component").then(c => c.ForgottenPasswordComponent)
    },


    {
        path: '**',
        redirectTo : "home"
    },

];
