import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: any;
  id: string;
  comments: [];

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.postsService.getSinglePost(this.id)
      .subscribe((response: any) => {
        this.post = response;
        
      });
    this.postsService.getComments(this.id)
      .subscribe((response: any) => {
        this.comments = response.comments;
        console.log(response.comments);
      });
  }
}
