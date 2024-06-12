import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderResumeComponent } from './render-resume.component';

const routes: Routes = [
  {
    path: '',
    component: RenderResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenderResumeRoutingModule { }