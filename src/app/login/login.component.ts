import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  user: SocialUser | undefined;

  constructor( private router: Router,private auth:AuthService) { }

//   ngOnInit(): void {
//   }

  signInWithGoogle(): any{
    this.auth.googleSignIn();
  }

}
