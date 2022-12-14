import { NgModule, Component } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path : 'posts',
    //loadChildren: './pages/posts/posts.module#PostsModule',
    loadChildren: () => import('./pages/posts/posts.module').then( m => m.PostsModule)
  },
  {
    path : '**',
    redirectTo: 'home'
  }

];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
