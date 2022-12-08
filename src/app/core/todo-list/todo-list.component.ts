import { Component, OnInit } from '@angular/core';
import { CalculService } from '../services/calcul.service';
import { todo } from 'src/app/model/todo';
import { TodoService } from '../services/todo.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
 n!:number;
 list:any;
 todolist:todo[]=[ {"userId": 1, "id": 1, "title": "delectus aut autem", "completed": false},
 {"userId": 1, "id": 2, "title": "quis ut nam facilis et officiaqui", "completed": false},
 {"userId": 1, "id": 3, "title": "fugiat veniam minus", "completed":  false},
 {"userId": 1, "id": 4, "title": "quo adipisci enim quam ut ab", "completed": true}];
  constructor(private calculservice:CalculService,private todoservc:TodoService) { }
 
  ngOnInit(): void {
    this.todoservc.getTodos().subscribe(
      (result)=>{
        this.list=result
        console.log(result)
      }
    );
  }
  getNumberOf(){
    this.n=this.calculservice.getNumberOf(this.todolist,'completed',true)
    }
    getuser(){
      this.todoservc.getPTodo('userId').subscribe(
        (result)=>{
          this.list=result
          console.log(result)
        }
      )
    }
  
  
  }

