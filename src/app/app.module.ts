import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ResourcesComponent } from './resources/resources.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    WhatWeDoComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
