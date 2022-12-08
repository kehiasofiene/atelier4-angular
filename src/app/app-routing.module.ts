import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './core/todo-list/todo-list.component';
import { UsersComponent } from './core/users/users.component';

const routes: Routes = [
  {
    path:'listtodo',component:TodoListComponent
  },
  {
    path:'listusers',component:UsersComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
})
export class AppRoutingModule { }
