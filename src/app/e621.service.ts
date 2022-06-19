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
    return this.http.get<PostsRoot>('https://e621.net/posts.json?tags='+tags+'&limit=1&_client=E6Feud');
  }

  getTagAliases(tag : string) : Observable<any[]>{ // wip
    return this.http.get<any[]>('https://e621.net/tag_aliases?format=json&search[name_matches]='+tag+'&search[status]=active&_client=E6Feud');
  }
}
