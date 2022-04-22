import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let tokenizedRequest = req.clone({
        setHeaders:{
          Authorization:'Bearer'+ localStorage.getItem('jwt-token')
        }
      });
      return next.handle(tokenizedRequest);
  }
}