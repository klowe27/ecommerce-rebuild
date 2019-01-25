import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'what-we-do',
    component: WhatWeDoComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
