import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactComponent } from './contact/contact.component';
import { ActionComponent } from './action/action.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { ShopComponent } from "./shop/shop.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'what-we-do',
    component: WhatWeDoComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'action',
    component: ActionComponent
  },
  {
  path: 'resources/:slug',
  component: ResourceDetailComponent
  },
  {
  path: 'shop',
  component: ShopComponent
  },
  {
  path: 'shop/:id',
  component: ProductDetailComponent
  },
  {
  path: 'cart',
  component: CartComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
