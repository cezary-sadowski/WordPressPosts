import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{

  constructor(private postsService: PostsService) { 
  }

  onPostClick(id){
    this.postsService.getSinglePost(id)
      .subscribe((response: any) => {
        
      })
  }

}
