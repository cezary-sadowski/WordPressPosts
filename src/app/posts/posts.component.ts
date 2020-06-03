import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Array<any>;
  totalPosts: number;
  page: number = 1;

  constructor(private postsService: PostsService) { 
    this.posts = new Array<any>();
  }

  ngOnInit(): void {
    this.postsService.getPosts()
      .subscribe((response: any) => {
        console.log(response.posts);
        this.posts = response.posts;
        this.totalPosts = response.posts.length;
      })
  }
}
