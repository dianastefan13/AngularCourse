import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  apiUrl: string = 'http://localhost:3000/'
  constructor(private http: HttpClient) {
    
   }
   getHeroes(){
     return this.http.get(this.apiUrl + 'heroes');
   }

   getHeroById(id){
    return this.http.get<Hero>(this.apiUrl + 'hero/' + `${id}`).subscribe(
      response => {console.log(response)},
       error => {console.log(error)}
    )
   }

   createHero(body){
     return this.http.post(this.apiUrl + 'hero', body).subscribe(
      response => {console.log(response)},
      error => {console.log(error)}
     )
   }

   updateHero(id, body){
     return this.http.put(this.apiUrl + 'hero/' + `${id}`, body).subscribe(
      response => {console.log(response)},
      error => {console.log(error)}
     )
   }

   deleteHero(id){
     this.http.delete(this.apiUrl + 'hero/' + `${id}`).subscribe(
      response => {console.log(response)},
      error => {console.log(error)}
     )
   }

}
