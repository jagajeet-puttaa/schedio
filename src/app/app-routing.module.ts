import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { PostdetailComponent } from './postdetail/postdetail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'post', component: PostComponent},
  { path: 'login',component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'postdetail', component: PostdetailComponent},
  { path: '',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
