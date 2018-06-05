import { MilesDrivenService } from './miles-driven.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MilesDrivenComponent } from './miles-driven/miles-driven.component';


@NgModule({
  declarations: [
    AppComponent,
    MilesDrivenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MilesDrivenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
