import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private authService: SocialAuthService) { }

  ngOnInit(): void {
  }

  signInHandlerGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      console.log(data)
      sessionStorage.setItem("google_auth", JSON.stringify(data))
      localStorage.setItem('google_auth', JSON.stringify(data));
      this.router.navigateByUrl('/dashboard').then();
    })  
  }
  signInHandlerFacebook(): void {
    console.log("FacebookLoginProvider.PROVIDER_ID");
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((data: any) => {
      console.log(data)
      sessionStorage.setItem("google_auth", JSON.stringify(data))
      localStorage.setItem('google_auth', JSON.stringify(data));
      this.router.navigateByUrl('/dashboard').then();
    })
  }

}
