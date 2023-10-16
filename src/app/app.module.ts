import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {OrdersModule} from "./orders/orders.module";
import { AppRoutingModule } from './app-routing.module';
import {SiteFrameworkModule} from "./site-framework/site-framework.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OrdersModule,
    AppRoutingModule,
    HttpClientModule,
    SiteFrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
