import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  firebaseConfig = {
    apiKey: "AIzaSyDjpXk0q6OV3Su-fWCSooffdPnEYGehNvo",
    authDomain: "cinesuggest-7f4f3.firebaseapp.com",
    projectId: "cinesuggest-7f4f3",
    storageBucket: "cinesuggest-7f4f3.firebasestorage.app",
    messagingSenderId: "1039561397005",
    appId: "1:1039561397005:web:8e2e1a6affd8a885ced644",
    measurementId: "G-KGW05V60CM"
  };

  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);

  constructor() { }
}
