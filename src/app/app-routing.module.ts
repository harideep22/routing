import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'server',component:ServerComponent
  },
  {
    path:'user',component:UserComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
