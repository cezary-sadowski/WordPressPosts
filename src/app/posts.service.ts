import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url: string = 'https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/?number=100';
  private postUrl: string = 'https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getSinglePost(id: string) {
    return this.http.get(this.postUrl + id);
  }
}
