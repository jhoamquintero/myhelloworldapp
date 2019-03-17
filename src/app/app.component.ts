import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  testArray : string [];
  email: string;
  website:string;
  showHobbies:boolean;

  constructor(){
    //console.log('Constructor funciona!')
    this.title = "Jq APP";
    this.email = "jq@tetest.com";
    this.website ="www.google.com";
    this.showHobbies = false;
    this.testArray = ['hobby', 'cosa','test'];
  }

  toggleHobbies(){
    this.showHobbies=!this.showHobbies;
  }

  newHobby(hobby){
    //console.log(hobby.value);
    this.testArray.push(hobby.value);
    hobby.value='';
    return false;
  }
}
