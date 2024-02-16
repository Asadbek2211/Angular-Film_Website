import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Project1Component } from './project1/project1.component';
import { ProjectsComponent } from './projects/projects.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  { path: '', redirectTo: '/bosh-sahifa', pathMatch: 'full' },
  {path:'form', component:ProjectsComponent},
  {path:'form2',component:ModalComponent},
  {path:'form3',component:Project1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
