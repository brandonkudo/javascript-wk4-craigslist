import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NewPostComponent } from './newpost/newpost.component';
import { PostListComponent } from './post-list/post-list.component';
import { PersonalsComponent } from './personals/personals.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { HousingComponent } from './housing/housing.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostListComponent,
    PersonalsComponent,
    ForSaleComponent,
    HousingComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
