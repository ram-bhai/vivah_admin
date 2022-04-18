import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from 'express';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vivah_Admin'; 


  constructor(private api:ApiService){}

  // public isLoggedIn():boolean{
  //   return this.api.checkToken()
  // }

  // public signOut(){
  //   localStorage.removeItem('jwt-token');
  //   this.router.navigate(['/signin'])
  // }
}
