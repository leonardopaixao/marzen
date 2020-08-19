import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

	public email     : string;
	public password  : string;
	public userName  : string;
	public errorMsg  : string;
	public firstName : string;
	public lastName  : string;

	constructor( private authService: AuthService, private router: Router ) {
	}

	ngOnInit(): void {}

	public signUp(){
		const newUserData = {
			email	  : this.email,
			password  : this.password,
			userName  : this.userName,
			firstName : this.firstName,
			lastName  : this.lastName
		}

		this.authService.signUp(newUserData).then(
			ref => {
				if( ref ){
					this.authService.setAuthState(ref.user);
					this.authService.setUserData(
						newUserData['firstName'],
						newUserData['lastName'],
						newUserData['email'],
						newUserData['userName'],
						newUserData['password']
					);
					this.router.navigate(['']);
				}
			}
		).catch(error => { this.errorMsg = error.message });
	}
}
