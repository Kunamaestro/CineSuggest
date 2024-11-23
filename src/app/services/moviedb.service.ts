import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  Access = {
    APIKey : "b8cd4ab43b7d79c6669b020dee03f3c2",
    Token : "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGNkNGFiNDNiN2Q3OWM2NjY5YjAyMGRlZTAzZjNjMiIsIm5iZiI6MTczMjMwODM0NC4yNzIzMDI5LCJzdWIiOiI2NzQwZTk1YTVjYWMwNDFjZmFlMjhlZDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._KkKnF3GfpBoBdiLkWnTe5hibHoFZBRBPrOLQ52Qwa0"
  }
  

  constructor() { }
}
