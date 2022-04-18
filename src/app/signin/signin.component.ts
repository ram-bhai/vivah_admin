import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  email:string = "";
  password:string = "";

  constructor(private api : ApiService, private router:Router) { }
  public signed(){
  
    this.api.signIn(this.email,this.password).subscribe((result)=>{
      if(result.status = "SignIn success"){
        // localStorage.setItem('jwt-token',result.token)
      alert('Signed in');
      }
       else
       alert('logging in failed')
     })
  
  }

  ngOnInit(): void {
  }

}
