import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestListComponent } from './request-list/request-list.component';
import { SelectComponent } from './select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RequestListComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule
  ],
  exports:[
    RequestListComponent,
    SelectComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RequestModule { }
