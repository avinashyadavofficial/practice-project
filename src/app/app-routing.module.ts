import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentFormComponent } from './student/student-form/student-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  // {
  //   path:'student',
  //   component:StudentComponent,
  //   children:[
  //     {path:'list',component:StudentListComponent},
  //     {path:'form',component:StudentFormComponent}
  //   ]
  // }
  {path:'student',
    loadChildren:()=>import('./student/student.module').then(m=>m.StudentModule)
  },
  {path:'',redirectTo:'/student',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
