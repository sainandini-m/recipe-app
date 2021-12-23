import {  Component , Input, OnDestroy, OnInit} from "@angular/core";
import { Post } from "../post.model";
import { PostSerivce } from "../post.service";
import { Subscription } from "rxjs";

@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})

export class PostListComponent implements OnInit,OnDestroy{

  // posts=[
  //   {title:'First',content:'Content'},
  //   {title:'Second',content:'Content'},
  //   {title:'Third',content:'Content'}
  // ]


  //@Input() posts: Post[]=[];

  posts: Post[]=[];
  private postsSub:Subscription;

  constructor(public postsService: PostSerivce){ //will store the imcoming value in the same property

  }

  ngOnInit(){  //automatically call this method when angular loads this component, do basic initializations here
      this.posts=this.postsService.getPosts();
      this.postsSub=this.postsService.getPostUpdateListener()
        .subscribe((posts:Post[])=>{
        this.posts =posts;
      });
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
    //removes subscription of the postservce when list component is not a part of the dom
  }

}
