import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactComponent } from './contact/contact.component';
import { ActionComponent } from './action/action.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryPipe } from './category.pipe.ts'


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    WhatWeDoComponent,
    ResourcesComponent,
    ContactComponent,
    ActionComponent,
    ResourceDetailComponent,
    ShopComponent,
    ProductDetailComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
