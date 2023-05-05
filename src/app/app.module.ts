import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./public/master-page/header/header.component";
import { FooterComponent } from "./public/master-page/footer/footer.component";
import { RouteNotFoundComponent } from "./public/master-page/errors/route-not-found/route-not-found.component";
import { RequestPageComponent } from "./modules/pages/request-page/request-page.component";
import { RequestListComponent } from "./modules/request/request-list/request-list.component";
import { SelectComponent } from "./modules/request/select/select.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RouteNotFoundComponent,
    RequestPageComponent,
    RequestListComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule, //
    MatOptionModule, //
    MatFormFieldModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule, //
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
