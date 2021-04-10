import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseFormComponent } from './course-form/course-form.component';
 
const routes: Routes = [
  { path: '',
  component: CoursesComponent ,
  children: [
    {
      path: '' , component:CourseListComponent
    }, 
    {
      path: 'new' , component:CourseFormComponent
    }, 
    {
      path: ':id' , component:CourseDetailsComponent
    }
]
},
{
  path: '**' , redirectTo:''
    
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
