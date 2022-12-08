
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todo } from 'src/app/model/todo';
import { Utilisateur } from 'src/app/model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }
  getTodos():Observable<todo[]>{
    return this.http.get<todo[]>("https://jsonplaceholder.typicode.com/todos");
  }
  getPTodo(id:any):Observable<Utilisateur> {
    return this.http.get<Utilisateur>('http://jsonplaceholder.typicode.com/todos'+id)
  }
}
