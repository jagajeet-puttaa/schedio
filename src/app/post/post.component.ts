import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../interfaces/i-post';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  isPostLiked: boolean = false;
  isPostSaved: boolean = false;

  tagsData = {
    Database: "layers",
    Security: "security",
    Cloud: "cloud"
  }

  @Input() myPost: IPost | any;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
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
