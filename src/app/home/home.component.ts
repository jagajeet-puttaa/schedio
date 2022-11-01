import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from '../interfaces/i-post';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadService } from '../upload.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  DJANGO_SERVER ='http://192.168.162.120:8000'  //FIND DJANGO SERVER HERE!
  toppingList: string[] = ['ReactJS', 'AngularJS', 'Django', 'Postgresql', 'ElectronJS', 'Android','Machine Learning','Cybersecurity'];
  response: string = " ";
  imageURL1: any;
  url = "http://192.168.162.95:8000/"
  posts:any

  public userDetails: any;
  createPostForm !: FormGroup;
  panelOpenState: boolean = false;
  toFile: any;
  images:any = [];
  durationInSeconds = 5;


  constructor( private router: Router,private uploadService: UploadService,private http:HttpClient,private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    const storage = localStorage.getItem('user');
    // console.log(storage)
    if (storage) {
      this.userDetails = JSON.parse(storage);
    } else {
      this.signOut();
    }

    this.createPostForm = new FormGroup({
      projectName : new FormControl("",[Validators.required,Validators.maxLength(25)]),
      projectGist : new FormControl("",Validators.required),
      projectDescription : new FormControl("",Validators.required),
      projectTechstack: new FormControl("",Validators.required),
      multiplefile: new FormControl("",Validators.required)  ,
      fileSource: new FormControl('', [Validators.required])
    })

    this.http.get(this.url+"viewPost/").subscribe((post: any)=>{
      this.posts = post;
      // console.log(this.posts);
      // console.log(post)
    });
  }

  signOut(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login').then();
  }

  get FilePhoto(): FormControl{
    return this.createPostForm.get("multiplefile") as FormControl
  }

  onChangePhoto(event:any){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.FilePhoto.setValue(file);
    }
  }


  onCreatePostFormSubmit():void{
    // console.log(this.createPostForm.value)
    // this.posts.push({
    //     profileName: this.userDetails.displayName,
    //     profileImage: this.userDetails.photoURL,
    //     profileDescription: ' ',
    //     tags: this.createPostForm.value.projectTechstack,
    //     imageUrl: this.createPostForm.value.multiplefile,
    //     projectName: this.createPostForm.value.projectName,
    //     projectGist:this.createPostForm.value.projectGist,
    //     projectDescription:this.createPostForm.value.projectDescription
    // })
    // console.log(this.posts[this.posts.length - 1])
    const formData =  new FormData();
    formData.append('file',this.FilePhoto.value);
    // console.log(this.FilePhoto.value)

    this.uploadService.upload(formData).subscribe(
      (res) => {
        this.response = res;
        this.imageURL1 = `${this.DJANGO_SERVER}${ res.file}`;
        // console.log(this.response);
        // console.log(this.imageURL1);
        this.onSubmitPhoto()
      },
      (err) => {
        console.log(err);
      }
    );

    this._snackbar.open("Your application has been received!","DISMISS",{duration: this.durationInSeconds});
    // this.createPostForm.reset();
    this.panelOpenState = !this.panelOpenState;
  }

  onSubmitPhoto() {
    // console.log({
    //   profileName: this.userDetails.displayName,
    //   profileImage:this.userDetails.photoURL,
    //   profileDescription: 'Description',
    //   tags: this.createPostForm.value.projectTechstack,
    //   imageUrl:this.response,
    //   projectName: this.createPostForm.value.projectName,
    //   projectGist: this.createPostForm.value.projectGist,
    //   projectDescription: this.createPostForm.value.projectDescription
    // })

    this.http.post(this.url+"addPost/",{
          profileName: this.userDetails.displayName,
          profileImage: this.userDetails.photoURL,
          profileDescription: 'Description',
          tags: this.createPostForm.value.projectTechstack,
          imageUrl: this.response,
          projectName: this.createPostForm.value.projectName,
          projectGist:this.createPostForm.value.projectGist,
          projectDescription:this.createPostForm.value.projectDescription
      }).subscribe()

      this.reloadComponent();
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

}
