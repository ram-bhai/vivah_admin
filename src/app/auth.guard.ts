import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private api:ApiService,private router:Router){}
  canActivate():boolean{
    if(this.api.checkToken()){
      alert("token valid")
      return true;
    }
    else{
      this.router.navigate(['signin'])
      return false;

    }
  }
   
  
}
