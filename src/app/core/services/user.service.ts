import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Utilisateur } from 'src/app/model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getTodos():Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>("https://jsonplaceholder.typicode.com/users");
  }
 
}
