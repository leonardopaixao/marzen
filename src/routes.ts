import{ Routes } from '@angular/router';
import{ SignupComponent } from './app/components/signup/signup.component';
import{ LoginComponent } from './app/components/login/login.component';
import{ ScheduleComponent } from './app/components/schedule/schedule.component';

export const appRoutes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];