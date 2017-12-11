import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewPostComponent {
@Input() childShowForm;
@Output() newPostSender = new EventEmitter();
@Output() exitPostFormClickedSender = new EventEmitter();



submitForm(name: string, body: string, date: string, email: string) {
  var newPostToAdd: Post = new Post(name, body, date, email);
  this.newPostSender.emit(newPostToAdd);
}

exitPostFormClicked() {
  this.exitPostFormClickedSender.emit();
}
}
