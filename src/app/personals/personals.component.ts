import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-personals',
  templateUrl: './personals.component.html',
  styleUrls: ['./personals.component.css']
})
export class PersonalsComponent {
  @Output() showDetailsClickedSender = new EventEmitter();

  public masterPersonalsList: Post[] = [
    new Post('Looking for a cat lover', 'I have a cat and want to find someone who shares my passion for cats. MUST LOVE CATS', '12/10/17', 'cheezeburger@omgcats.com'),
    new Post('Pizza date', 'Be the cheese to marinara', '12/03/17', 'pineappleonpizza@gmail.com'),
    new Post('Mushroom lover!', 'Looking for someone to eat and collect fungi with', '07/07/17', 'funguy@fungus.com')
  ];


  selectedPost = null;

  showDetails(selectedPost: Post) {
    if(selectedPost.active) {
      selectedPost.active = false;
    } else {
      selectedPost.active = true;
    }
  }

}
