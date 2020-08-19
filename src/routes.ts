import{ Routes } from '@angular/router';
import{ SignupComponent } from './app/components/signup/signup.component';
import{ LoginComponent } from './app/components/login/login.component';

export const appRoutes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent }
];