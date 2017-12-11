import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from './../post.model';
import { NewPostComponent } from './../newpost/newpost.component';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingComponent {
  @Output() showDetailsClickedSender = new EventEmitter();

  public masterHousingList: Post[] = [
    new Post('19th Century Victorian Bungalow', 'Spacious 2 bedroom bungalow located in NE portland right off the max line. $3200/mo, NO PETS', '11/14/17', 'landlordfromhell@gmail.com'),
    new Post('Definitely NOT a haunted house', 'Comfortable 4 bedroom house located in SW portland, definitely no ghosts live here', '06/66/17', 'iamnotaghost@boo.com'),
    new Post('closet for rent', '200 sq ft closet available for room and board, $400 OBO', '10/20/17', 'stingy@gmail.com')
  ];

  selectedPost = null;


  clickedButton = false;

  clickNew() {
    console.log("hello");
    this.clickedButton = !this.clickedButton;
  }

  showDetails(selectedPost: Post) {
    if(selectedPost.active) {
      selectedPost.active = false;
    } else {
      selectedPost.active = true;
    }
  }
}
