import { Component } from '@angular/core';

import { PostService, IPost } from './posts.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  title : string;
  testArray : string [];
  email: string;
  website:string;
  showHobbies:boolean;
  posts:IPost [];

 constructor(private postService:PostService){
    this.title = "Jq APP";
    this.email = "jq@tetest.com";
    this.website ="www.google.com";
    this.showHobbies = false;
    this.testArray = ['hobby', 'cosa','test'];

    this.postService.getPosts().subscribe(posts => {
      this.posts = posts
    });
  }

  toggleHobbies(){
    this.showHobbies=!this.showHobbies;
  }

  newHobby(hobby){
    if(hobby.value!=""){
      this.testArray.push(hobby.value);
      hobby.value='';
    }
    return false;  
  }  
}


