import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostService{
    constructor(private http:HttpClient){
    }

    getPosts(){
        return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
    }
}
export interface IPost{
    id:string;
    title:string;
    body:string
  }