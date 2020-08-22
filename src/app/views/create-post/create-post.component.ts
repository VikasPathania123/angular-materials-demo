
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PostService } from 'app/services/post-service/post-service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postForm: FormGroup;
  isSubmitted = false;
  public baseURL = "https://jsonplaceholder.typicode.com/";
  constructor(private formBuilder: FormBuilder,private _http: HttpClient, private _postService: PostService) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(40)]],
      body: ['', [Validators.required, Validators.maxLength(100)]],
      userId: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.postForm.controls; }

  onSubmitPost() {
    this.isSubmitted = true;

    // stop here if form is invalid
    if (this.postForm.invalid) {
      return;
    }
   
    //Get posts Load
    this._postService.addPost(`${this.baseURL}posts`,this.postForm.value)
      .subscribe(data => {      
        console.log(data);   
        alert("Post successfully submitted !");
        this.postForm.reset();
        this.isSubmitted = false;
      },error=>{
        console.log(error);  
      });  
  }
}