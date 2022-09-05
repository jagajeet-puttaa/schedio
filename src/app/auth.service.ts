import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {GoogleAuthProvider, GithubAuthProvider, getAuth,signInWithCredential, signInWithPopup, fetchSignInMethodsForEmail, signInWithEmailAndPassword} from '@angular/fire/auth'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  provider = new GithubAuthProvider();
  constructor(private fireauth: AngularFireAuth, private router: Router,private _snackBar: MatSnackBar) { }

  //signin with google
  googleSignIn(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res=>{
      this.router.navigate(['/home']);
      localStorage.setItem('user',JSON.stringify(res.user))
      console.log(res)
    },err => {
      alert(err.message);
    })
  }

  githubSignIn(){
     const auth = getAuth();
  signInWithPopup(auth, this.provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      // The signed-in user info.
      const user = result.user;
      console.log(user)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
      console.log(error)
      this._snackBar.open('Account already linked with google. Continue with google!', 'Close');
    });
  }
}

