import { Injectable } from '@angular/core';
import { Post } from 'src/DTO/post';
import { Tag } from 'src/DTO/tag';
import { Blacklist } from './blacklist';
import { E621Service } from './e621.service';
import { LoadingStatusService } from './loading-status.service';
@Injectable({
  providedIn: 'root'
})

export class GameService {
  readonly maxTries = 5;

  gameRunning : boolean = false;
  tries_left = 0;
  points=0;
  lastAddedPoints=0;
  sauceShown = false;
  currentPost? : Post;
  tags_general : Tag[] = [];
  tags_species : Tag[] = [];
  tags_character : Tag[] = [];
  tags_copyright : Tag[] = [];
  tags_artist : Tag[] = [];
  tags_invalid : Tag[] = [];
  tags_lore : Tag[] = [];
  tags_meta : Tag[] = [];

  constructor(private e6service : E621Service,private loadingService : LoadingStatusService) { }

  startGame(nsfw : boolean) : any {
    this.gameRunning = true;
    this.tags_general = [];
    this.tags_species = [];
    this.tags_character = [];
    this.tags_copyright = [];
    this.tags_artist = [];
    this.tags_invalid = [];
    this.tags_lore = [];
    this.tags_meta = [];
    this.sauceShown=false;
    this.tries_left=5;

    this.loadingService.loading=true;
    this.e6service.getSinglePost("rating:safe order:random "+Blacklist.getStr()).subscribe(post=>{
      
      this.currentPost = post.posts[0];
      this.e6service.getPostTagCounts(this.currentPost.id).subscribe(aaa=>{
        for (let category of ["general","species","character","copyright","artist","invalid","lore","meta"]) {
          for (let tag of (this.currentPost!.tags as any)[category]) {
            let count=0;
            for (let tagCountResult of aaa){
              if ((tagCountResult.tag as string) == tag){
                count = tagCountResult.count as number
              }
            }
            let newTag : Tag = new Tag(tag,category,count,false);
            if (category == "general") {
              this.tags_general.push(newTag);
            } else if (category == "species") {
              this.tags_species.push(newTag);
            } else if (category == "character") {
              this.tags_character.push(newTag);
            } else if (category == "copyright") {
              this.tags_copyright.push(newTag);
            } else if (category == "artist") {
              this.tags_artist.push(newTag);
            } else if (category == "invalid") {
              this.tags_invalid.push(newTag);
            } else if (category == "lore") {
              this.tags_lore.push(newTag);
            } else if (category == "meta") {
              this.tags_meta.push(newTag);
            }
          }
        }

        this.loadingService.loading=false;
      });
    });
    
  }

  showAllTags() {
    for (let tag of this.tags_general) {
      tag.reveal();
    }
    for (let tag of this.tags_species) {
      tag.reveal();
    }
    for (let tag of this.tags_character) {
      tag.reveal();
    }
    for (let tag of this.tags_copyright) {
      tag.reveal();
    }
    for (let tag of this.tags_artist) {
      tag.reveal();
    }
    for (let tag of this.tags_invalid) {
      tag.reveal();
    }
    for (let tag of this.tags_lore) {
      tag.reveal();
    }
    for (let tag of this.tags_meta) {
      tag.reveal();
    }

  }

  searchAndShowTag(tagName: string){
    tagName = tagName.toLowerCase();
    var matched: string[]=[];
    matched = matched.concat(this.searchTagExact(tagName));
    matched = matched.concat(this.searchTagExact(tagName.replace("e","??")));
    matched = matched.concat(this.searchTagStartsWith(tagName+"_("));
    // todo: tag alias support?
    var matchedUnique = [...new Set(matched)];
    return matchedUnique;
  }

  searchTagExact(tagName: string) {
    var matched: string[]=[];
    tagName = tagName.toLowerCase();
    // replace spaces with _
    tagName = tagName.replace(/\s/g,"_");
    for (let tag of this.tags_general) {
      if (tag.originalTagName == tagName && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    for (let tag of this.tags_species) {
      if (tag.originalTagName == tagName && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    for (let tag of this.tags_character) {
      if (tag.originalTagName == tagName && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    for (let tag of this.tags_copyright) {
      if (tag.originalTagName == tagName && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    for (let tag of this.tags_artist) {
      if (tag.originalTagName == tagName && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    for (let tag of this.tags_invalid) {
      if (tag.originalTagName == tagName && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    for (let tag of this.tags_lore) {
      if (tag.originalTagName == tagName && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    for (let tag of this.tags_meta) {
      if (tag.originalTagName == tagName && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    return matched;
  }

  searchTagStartsWith(tagName: string) {
    var matched: string[]=[];
    tagName = tagName.toLowerCase();
    // replace spaces with _
    tagName = tagName.replace(/\s/g,"_");
    for (let tag of this.tags_general) {
      if (tag.originalTagName.startsWith(tagName) && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    for (let tag of this.tags_species) {
      if (tag.originalTagName.startsWith(tagName) && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    for (let tag of this.tags_character) {
      if (tag.originalTagName.startsWith(tagName) && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    for (let tag of this.tags_copyright) {
      if (tag.originalTagName.startsWith(tagName) && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    for (let tag of this.tags_artist) {
      if (tag.originalTagName.startsWith(tagName) && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    for (let tag of this.tags_invalid) {
      if (tag.originalTagName.startsWith(tagName) && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    for (let tag of this.tags_lore) {
      if (tag.originalTagName.startsWith(tagName) && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    for (let tag of this.tags_meta) {
      if (tag.originalTagName.startsWith(tagName) && !tag.isRevealed) {
        tag.reveal();
        this.addPointsForTag(tag.count);
        matched.push(tag.originalTagName);
      }
    }
    return matched;
  }

  showSauce(){
    this.sauceShown = true;
    this.showAllTags();
  }

  addPointsForTag(x : number){
    var r = 1000;
    var h = 0.004;
    var v = 30;
    var m = 36;
    var c = 0.9995;
    var b = 12;
    var p =3;
    var g = 0;

    var n = 1-(g/p);
    var x_rnh = ((x-(r*n)))*h;
    var t1 = -((x_rnh/(1+Math.abs(x_rnh)))*v)+v;
    var t2=(m*n*Math.pow(c,x))+b;
    this.lastAddedPoints=Math.floor(t1+t2);
    this.points+=this.lastAddedPoints;
  }
}


