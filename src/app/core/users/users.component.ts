import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/model/Utilisateur';
import { CalculService } from '../services/calcul.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers!:Utilisateur[];
  n!:number;
  constructor(private servicecalc:CalculService,private userservc:UserService) { }

  ngOnInit(): void {
    this.listUsers=[
      {id: 1, name: "Leanne Graham", username: "Bret", email:"Sincere@april.biz"},
      {id: 2, name: "Ervin Howell", username: "Bret", email: "Shanna@melissa.tv"},
      {id: 3, name: "Clementine Bauch", username: "Samantha", email:"Nathan@yesenia.net"}
      ]
  }
  getnumberof(value:any){
    this.n=this.servicecalc.getNumberOf(this.listUsers,'username',value)
  }
 

}
