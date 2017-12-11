import { Component } from '@angular/core';
import { Post } from './post.model';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent} from './newpost/newpost.component';
import { PersonalsComponent } from './personals/personals.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { HousingComponent } from './housing/housing.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Craigslist!';
}
