import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent, TableHeaderTemplateDirective, TableRowTemplateDirective } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableHeaderTemplateDirective,
    TableRowTemplateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
