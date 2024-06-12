import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./feature/resume-builder/resume-builder.module").then(m=>m.ResumeBuilderModule)
  },
  {
    path: 'view-resume',
    loadChildren: () => import("./feature/render-resume/render-resume.module").then(m=>m.RenderResumeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
