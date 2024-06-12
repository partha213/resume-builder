import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ConvertControlPipe } from './pipes/convert-control.pipe';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    ConvertControlPipe
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports:[
    PageHeaderComponent,
    PageFooterComponent,
    ConvertControlPipe
  ]
})
export class SharedModule { }
