import { Routes } from '@angular/router';
import { AboutComponent } from './about-us/about.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
]