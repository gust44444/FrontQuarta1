import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {InputTextModule} from 'primeng/inputtext';

import {ButtonModule} from 'primeng/button';

import {TableModule} from 'primeng/table';

import {TooltipModule} from 'primeng/tooltip';

import {PaginatorModule} from 'primeng/paginator';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
