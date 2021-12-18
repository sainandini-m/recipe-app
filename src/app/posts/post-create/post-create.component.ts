import { Component, EventEmitter, Output } from "@angular/core";
import { Post } from "../post.model";

@Component({
    templateUrl:'./post-create.component.html',
    selector:'app-post-create',
    styleUrls:['./post-create.component.css']
})

export class PostCreateComponent{
  enteredTitle='';
  enteredContent='';
  @Output() postCreated=new EventEmitter<Post>(); //we can listen to this event through outside

  // onAddPost(postValue : HTMLTextAreaElement){
  //   console.log(postValue.value)
  //   this.newPost="Hello"
  // }

  onAddPost(){
    const post:Post=
    {
      title:this.enteredTitle,
      content:this.enteredContent
    };

    this.postCreated.emit(post);

  }

}
