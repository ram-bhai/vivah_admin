import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vivah_Admin'; 


  constructor(private api:ApiService,private router:Router){}
  
  
  public isLoggedIn():boolean{
    return this.api.checkToken()
  }

  
   public signOut(){
    localStorage.removeItem('jwt-token');
      this.router.navigate(['signin']);
   }
}
