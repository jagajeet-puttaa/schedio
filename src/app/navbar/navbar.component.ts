import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public userDetails: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const storage = localStorage.getItem('user');
    if (storage) {
      this.userDetails = JSON.parse(storage);
    } else {
      this.signOut();
    }
  }

  signOut(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login').then();
  }

}

// {"uid":"qMKXSD8Nr1fQ3SvtZMtkXNJj0ud2",
// "email":"jagajeetputtaa.2002@gmail.com",
// "emailVerified":true,
// "displayName":"Jagajeet Puttaa",
// "isAnonymous":false,
// "photoURL":"https://lh3.googleusercontent.com/a-/AFdZuco4hihWGQbzwuTSEwf53cOZI5Uclz3PTWtV9cQa4A=s96-c",
// "providerData":
// [{"providerId":"google.com",
// "uid":"111010472196991534646",
// "displayName":"Jagajeet Puttaa",
// "email":"jagajeetputtaa.2002@gmail.com",
// "phoneNumber":null,
// "photoURL":"https://lh3.googleusercontent.com/a-/AFdZuco4hihWGQbzwuTSEwf53cOZI5Uclz3PTWtV9cQa4A=s96-c"}],
// "stsTokenManager":