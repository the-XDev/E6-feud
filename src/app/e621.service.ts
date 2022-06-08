import { Injectable } from '@angular/core';
import { PostsRoot } from 'src/DTO/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class E621Service {

  constructor(private http: HttpClient) { }

  getSinglePost(tags : string) : Observable<PostsRoot>{
    tags = tags.replace(/\s/g, '+');
    // for random, add the order:random tag
    return this.http.get<PostsRoot>('https://e621.net/posts.json?tags='+tags+'&limit=1');
  }
}
