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
    console.log(storage)
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
