import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/services/post-service/post-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  public posts;
  public baseURL = "https://jsonplaceholder.typicode.com/";

  constructor(private _http: HttpClient, private _postService: PostService) { }


  ngOnInit() {
    //Get posts Load
    this._postService.getPosts(this.baseURL + "posts")
      .subscribe(data => {
        this.posts = data;
        //console.log(this.posts);        
      });
  }
}
