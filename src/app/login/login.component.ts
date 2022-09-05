import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/compat';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor( private router: Router,private auth:AuthService) { }

//   ngOnInit(): void {
//   }

  signInWithGoogle(): any{
    this.auth.googleSignIn();
  }

  signInWithGithub(): any{
    this.auth.githubSignIn();
    
  }
}
