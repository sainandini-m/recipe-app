import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from "../post.model";
import { PostSerivce } from "../post.service";

@Component({
    templateUrl:'./post-create.component.html',
    selector:'app-post-create',
    styleUrls:['./post-create.component.css']
})

export class PostCreateComponent{
  enteredTitle='';
  enteredContent='';
  //@Output() postCreated=new EventEmitter<Post>(); //we can listen to this event through outside

  constructor(public postsService :PostSerivce){

  }

  // onAddPost(postValue : HTMLTextAreaElement){
  //   console.log(postValue.value)
  //   this.newPost="Hello"
  // }

  onAddPost(form : NgForm){
    if(form.invalid){
      return;
    }
    // const post:Post=
    // {
    //   title:form.value.title,
    //   content:form.value.content
    // };

    this.postsService.addPosts(form.value.title,form.value.content)
    form.resetForm();

  }

}
