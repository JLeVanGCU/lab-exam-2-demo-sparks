import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ShowAlbumComponent } from './show-album/show-album.component';
import { SignInService } from './sign-in.service';

ShowAlbumComponent

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'show-album', component: ShowAlbumComponent, canActivate: [SignInService] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
