import { Injectable } from '@angular/core';
import { PostsRoot } from 'src/DTO/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class E621Service {

  htmlTagRegex = /class="search-tag".*?href=".*?">(.*?)<\/a>.*?data-count='(.*?)'/g

  constructor(private http: HttpClient) { }

  getSinglePost(tags : string) : Observable<PostsRoot>{
    tags = tags.replace(/\s/g, '+');
    // for random, add the order:random tag
    return this.http.get<PostsRoot>('https://e621.net/posts.json?tags='+tags+'&limit=1&_client=E6Feud');
  }

  getTagAliases(tag : string) : Observable<any[]>{ // wip
    return this.http.get<any[]>('https://e621.net/tag_aliases?format=json&search[name_matches]='+tag+'&search[status]=active&_client=E6Feud');
  }

  getPostTagCounts(postID : number) : Observable<any[]> {
    // this is a really lazy solution, but E6 doesn't give me a way to query a post's tags + their counts at the same time
    return new Observable(subscriber=>{
      this.http.get('https://e621.net/posts/'+postID+"&_client=E6Feud",{responseType: 'text'}).subscribe(data=>{
        var m;
        var results = [];
        while (m = this.htmlTagRegex.exec(data)){
          results.push({"tag":m[1].replace(/ /g,'_'),"count":Number.parseInt(m[2])})
        }
        subscriber.next(results);
        subscriber.complete();
      });
    })
  }
}
