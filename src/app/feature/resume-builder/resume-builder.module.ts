import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeBuilderComponent } from './resume-builder.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ProfessionalSummaryComponent } from './components/professional-summary/professional-summary.component';
import { EmploymentHistoryComponent } from './components/employment-history/employment-history.component';
import { PersonalInterestComponent } from './components/personal-interest/personal-interest.component';
import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    ResumeBuilderComponent,
    PersonalDetailsComponent,
    ProfessionalSummaryComponent,
    EmploymentHistoryComponent,
    PersonalInterestComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    MatCardModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatStepperModule
  ]
})
export class ResumeBuilderModule { }
