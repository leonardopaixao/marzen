import { Injectable } from '@angular/core';
import { Router 		 	 } from '@angular/router';
import { AngularFireAuth 	 } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable 		 } from 'rxjs';
import { User 				 } from '../models/user.model';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

	private user : Observable<firebase.User>;
	private authState : any;
	private uid : string;

	constructor( private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router ) {
		this.user = afAuth.authState;
	}

	public authUser(){
		return this.user;
	}

	public setAuthState(user){
		this.authState = user;
	}

	public logout(){
		this.afAuth.signOut();
		this.router.navigate(['login']);
	}

	public login(email: string, password: string){
		return this.afAuth.signInWithEmailAndPassword(email, password)
				.then((firebaseUser) =>{
					if( firebaseUser ){
						this.authState = firebaseUser;
						console.log('User logged!');
						this.router.navigate(['schedule']);
					}
				});
	}

	public signUp(data:any){
		return this.afAuth.createUserWithEmailAndPassword( data['email'], data['password'] );
	}

	public setUserData(firstName: string, lastName: string, email: string, username: string, password: string): void{
		this.user.pipe().subscribe(
			ref => {
				if(ref){
					const path = 'users/' + ref.uid;
					const data = {
						firstName 	: firstName,
						lastName 	: lastName,
						email		: email,
						password    : password,
						username	: username
					};
					this.db.object(path).update(data).catch(error => console.log(error));
				}
			}
			
		);
	}


}
