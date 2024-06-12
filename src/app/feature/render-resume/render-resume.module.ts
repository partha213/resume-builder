import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderResumeComponent } from './render-resume.component';
import { TemplateOneComponent } from './resume-templates/template-one/template-one.component';
import { RenderResumeRoutingModule } from './render-resume-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips'



@NgModule({
  declarations: [
    RenderResumeComponent,
    TemplateOneComponent
  ],
  imports: [
    CommonModule,
    RenderResumeRoutingModule,
    MatIconModule,
    MatChipsModule
  ]
})
export class RenderResumeModule { }
