import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css']
})
export class ForSaleComponent {
  @Output() showDetailsClickedSender = new EventEmitter();

  public masterForSaleList: Post[] = [
    new Post('majestic horse', 'I have one horse for sale, its very well behaved, i love it, but it has been bothering me recently and i need drug money', '12/02/17', 'horseguy@horsemail.com'),
    new Post('super nintendo classic', 'Super nintendo classic for sale. Beat all the games and know they are high in demand so asking for $500.', '11/01/17', 'thebigtaco@gmail.com'),
    new Post('cheeto 4 sale', 'selling 1 cheeto slightly resembles Jesus, slightly resembles Rosie ODonell', '12/05/17', 'michaelarringtoniphone@gmail.com')
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
