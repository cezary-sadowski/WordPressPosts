import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private service: PostsService) { }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe((response: any) => {
        console.log(response.posts);
      })
  }

}
