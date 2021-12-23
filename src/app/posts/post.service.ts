import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from 'rxjs';

@Injectable({providedIn:'root'}) //will only create one instance of this service
export class PostSerivce{
  private posts:Post[]=[];
  private postsUpdated = new Subject<Post[]>(); //passing list of posts as a payload


  getPosts(){
    return [...this.posts]; //as objects are of reference type hence spread makes it immutable
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPosts(title:string,content:string){
    const post:Post={
      title: title,
      content:content
    }

    this.posts.push(post)
    this.postsUpdated.next([...this.posts]); //pushes a new value it emits
  }
}
