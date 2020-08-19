import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user : Observable<firebase.User>;
  public userEmail : string;
  public errorMsg : string;
  public username : string;
  public firstName : string;

  constructor( private authService: AuthService, private router: Router ){
    this.username = '';
  }

  public logout(){
    this.authService.logout();
  }

  ngOnInit():void{
    this.user = this.authService.authUser();
    this.user.pipe().subscribe( ref => {
      if( ref )
        this.userEmail = ref.email
    });
  }

}
