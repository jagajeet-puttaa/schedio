import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { url } from '../interfaces/constants';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {

  currentPost:any
  currentId: any
  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // console.log(params['id']) 
      this.currentId = params['id'] 
    })
    this.http.get(url+"viewPostById/?id="+this.currentId).subscribe((post: any)=>{
      this.currentPost = post;
      // console.log(this.currentPost);
      console.log(post)
    });
  }

}
