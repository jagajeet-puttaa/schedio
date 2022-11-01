import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from '../interfaces/i-post';
import { url } from '../interfaces/constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  posts:any;
  public userDetails: any;

  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
    const storage = localStorage.getItem('user');
    if (storage) {
      this.userDetails = JSON.parse(storage);
    } else {
      this.signOut();
    }

    // this.posts = this.posts.filter((item: IPost) => {
    //   return item.profileName == this.userDetails.displayName;
    // })

    this.http.get(url+"viewPost/?profileName="+this.userDetails.displayName).subscribe((post: any)=>{
      this.posts = post;
      console.log(this.posts);
      // console.log(post)
    });
  }

  signOut(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login').then();
  }

}
