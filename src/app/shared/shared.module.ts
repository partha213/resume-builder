import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    PageHeaderComponent,
    PageFooterComponent
  ]
})
export class SharedModule { }
