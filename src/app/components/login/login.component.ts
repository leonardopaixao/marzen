import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

	
	public hide : boolean = true;
	public email = new FormControl('', [Validators.required, Validators.email]);
	public errorMsg : string = '';
	
	constructor( private authService: AuthService, private router: Router ){
		authService.authUser().subscribe( e => {
			if( e ){
				if( e.uid ){
					router.navigate(['']);
				}
			}
		});
	}

	form: FormGroup = new FormGroup({
		password: new FormControl(''),
	});

	public submit(){
		if (this.form.valid) {
			this.authService.login( this.email.value, this.form.get("password").value ).catch( (error) => { this.errorMsg = error.message });
		}
	}

	public getErrorMessage() {
		if (this.email.hasError('required'))
			return 'You must enter a value';

		return this.email.hasError('email') ? 'Not a valid email' : '';
	}
	
	@Input() error: string | null;

	@Output() submitEM = new EventEmitter();
}
