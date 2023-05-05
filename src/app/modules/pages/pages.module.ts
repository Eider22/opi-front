import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestPageComponent } from './request-page/request-page.component';
import { RequestModule } from '../request/request.module';
import { SelectComponent } from '../request/select/select.component';


@NgModule({
  declarations: [
    RequestPageComponent
  ],
  imports: [
    CommonModule,
    RequestModule,
    SelectComponent
  ]
})
export class PagesModule { }
