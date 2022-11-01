import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { url } from '../interfaces/constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPost } from '../interfaces/i-post';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {

  isPostLiked: boolean = false;
  isPostSaved: boolean = false;
  currentPost:any
  currentId: any
  constructor(private route: ActivatedRoute,private http: HttpClient,private _snackBar: MatSnackBar) { }

  // tempPost: IPost = {
  //       profileName: 'Krishna Sameer',
  //       profileImage: 'https://media-exp1.licdn.com/dms/image/C5603AQFZkjoHjx20Hw/profile-displayphoto-shrink_400_400/0/1647671525016?e=1668038400&v=beta&t=TVg1RWq2Tfm-XQhkSzBAajA25GzUVIfdwBvuvjWAa6w',
  //       profileDescription: 'CS Sophomore | Competitive Programmer',
  //       tags: ['Database','Security','Cloud'],
  //       imageUrl: 'https://cdn.dribbble.com/users/5296758/screenshots/16817313/media/c0adf729f1864f23a8b980d8eb2001dc.jpg?compress=1&resize=400x300',
  //       projectName: 'Schedio',
  //       projectGist: 'A project collaboration app',
  //       projectDescription: 'An Angular + Springboot based project to collaborate developers into projects'
  // }

  
  tagsMapper = new Map([
    [ "Database", 'layers' ],
    [ "Security", 'security' ],
    [ "Cloud", 'cloud' ]
  ]);

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // console.log(params['id']) 
      this.currentId = params['id'] 
    })
    this.http.get(url+"viewPostById/?id="+this.currentId).subscribe((post: any)=>{
      this.currentPost = post[0];
      // console.log(this.currentPost);
    });
  }

  onLike(){
    this.isPostLiked = !this.isPostLiked;
  }

  onSave(){
    this.isPostSaved = !this.isPostSaved;

    if(this.isPostSaved){
      this._snackBar.open('Saved !', 'Close');
    }
  }

}
