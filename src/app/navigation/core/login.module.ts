import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from '../routing-guard/auth.service';
import { AuthGuard } from '../routing-guard/auth-guard.service';
import { LoginComponent } from './login.component';
/*
const loginRoutes: Routes = [
  {path: 'login', component: LoginComponent}
];
*/

@NgModule({
  /*
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [RouterModule],
  */
  providers: [AuthService, AuthGuard]
})
export class LoginModule { }
