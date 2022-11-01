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

  posts: IPost[] = [
    {
      profileName: 'Krishna Sameer',
      profileImage: 'https://media-exp1.licdn.com/dms/image/C5603AQFZkjoHjx20Hw/profile-displayphoto-shrink_400_400/0/1647671525016?e=1668038400&v=beta&t=TVg1RWq2Tfm-XQhkSzBAajA25GzUVIfdwBvuvjWAa6w',
      profileDescription: 'CS Sophomore | Competitive Programmer',
      tags: ['Database','Security','Cloud'],
      imageUrl: 'https://cdn.dribbble.com/users/5296758/screenshots/16817313/media/c0adf729f1864f23a8b980d8eb2001dc.jpg?compress=1&resize=400x300',
      projectName: 'Schedio',
      projectGist: 'A project collaboration app',
      projectDescription: 'An Angular + Springboot based project to collaborate developers into projects'
    },
    {
      profileName: 'Jagajeet Puttaa',
      profileImage: 'https://media-exp1.licdn.com/dms/image/C5603AQFN2Wf8mfP9LQ/profile-displayphoto-shrink_400_400/0/1661823984295?e=1668038400&v=beta&t=fDw8FRNqbqI-vIFo0lSVfKhy_POEYTgofUfagLafeTM',
      profileDescription: 'The Freak',
      tags: ['React','Angular','Gaming'],
      imageUrl: 'https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg',
      projectName: 'Huleska',
      projectGist: 'An adventure/action videogame',
      projectDescription: 'An adventure/action based game based on Game of Thrones series'
    },
    {
      profileName: 'Rishiyanth',
      profileImage: 'https://media-exp1.licdn.com/dms/image/C5603AQHcD3lQRMXHZA/profile-displayphoto-shrink_400_400/0/1657805582382?e=1668038400&v=beta&t=iLo6wyDXGjYf9mc4h569pAy1Nr--VTwfvATnTSO2l14',
      profileDescription: 'Developer of the decade',
      tags: ['React','Kotlin','Movies'],
      imageUrl: 'https://pbs.twimg.com/profile_images/1220067947798024192/30eZhfxx_400x400.png',
      projectName: 'Apprishiate',
      projectGist: 'A groundbreaking movie',
      projectDescription: 'A movie based on a love-tale with twists and cinematic marvels'
    },
    {
      profileName: 'Krishna Sameer',
      profileImage: 'https://media-exp1.licdn.com/dms/image/C5603AQFZkjoHjx20Hw/profile-displayphoto-shrink_400_400/0/1647671525016?e=1668038400&v=beta&t=TVg1RWq2Tfm-XQhkSzBAajA25GzUVIfdwBvuvjWAa6w',
      profileDescription: 'CS Sophomore | Competitive Programmer',
      tags: ['Database','Security','Cloud'],
      imageUrl: 'https://cdn.dribbble.com/users/5296758/screenshots/16817313/media/c0adf729f1864f23a8b980d8eb2001dc.jpg?compress=1&resize=400x300',
      projectName: 'Schedio',
      projectGist: 'A project collaboration app',
      projectDescription: 'A Angular + Springboot based project to collaborate developers into projects'
    },
    {
      profileName: 'Rishiyanth',
      profileImage: 'https://media-exp1.licdn.com/dms/image/C5603AQHcD3lQRMXHZA/profile-displayphoto-shrink_400_400/0/1657805582382?e=1668038400&v=beta&t=iLo6wyDXGjYf9mc4h569pAy1Nr--VTwfvATnTSO2l14',
      profileDescription: 'Developer of the decade',
      tags: ['React','Kotlin','Movies'],
      imageUrl: 'https://pbs.twimg.com/profile_images/1220067947798024192/30eZhfxx_400x400.png',
      projectName: 'Apprishiate',
      projectGist: 'A groundbreaking movie',
      projectDescription: 'A movie based on a love-tale with twists and cinematic marvels'
    },
    {
      profileName: 'Krishna Sameer',
      profileImage: 'https://media-exp1.licdn.com/dms/image/C5603AQFZkjoHjx20Hw/profile-displayphoto-shrink_400_400/0/1647671525016?e=1668038400&v=beta&t=TVg1RWq2Tfm-XQhkSzBAajA25GzUVIfdwBvuvjWAa6w',
      profileDescription: 'CS Sophomore | Competitive Programmer',
      tags: ['Database','Security','Cloud'],
      imageUrl: 'https://cdn.dribbble.com/users/5296758/screenshots/16817313/media/c0adf729f1864f23a8b980d8eb2001dc.jpg?compress=1&resize=400x300',
      projectName: 'Schedio',
      projectGist: 'A project collaboration app',
      projectDescription: 'A Angular + Springboot based project to collaborate developers into projects'
    },
    {
      profileName: 'Jagajeet Puttaa',
      profileImage: 'https://media-exp1.licdn.com/dms/image/C5603AQFZkjoHjx20Hw/profile-displayphoto-shrink_400_400/0/1647671525016?e=1668038400&v=beta&t=TVg1RWq2Tfm-XQhkSzBAajA25GzUVIfdwBvuvjWAa6w',
      profileDescription: 'CS Sophomore | Competitive Programmer',
      tags: ['Database','Security','Cloud'],
      imageUrl: 'https://cdn.dribbble.com/users/5296758/screenshots/16817313/media/c0adf729f1864f23a8b980d8eb2001dc.jpg?compress=1&resize=400x300',
      projectName: 'Schedio',
      projectGist: 'A project collaboration app',
      projectDescription: 'A Angular + Springboot based project to collaborate developers into projects'
    },
  ]

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
