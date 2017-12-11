import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './newpost/newpost.component';
import { PersonalsComponent } from './personals/personals.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { HousingComponent } from './housing/housing.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
   {
     path: 'newpost',
     component: NewPostComponent
   },
   {
     path: 'post-list',
     component: PostListComponent
   },
   {
     path: 'personals',
     component: PersonalsComponent
   },
   {
     path: 'for-sale',
     component: ForSaleComponent
   },
   {
     path: 'housing',
     component: HousingComponent
   }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
