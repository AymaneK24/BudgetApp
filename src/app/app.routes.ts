import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { OrganismesPageComponent } from './Components/organismes-page/organismes-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { Routes, CanActivateChildFn } from '@angular/router';
import { PrincipalePageComponent } from './Components/principale-page/principale-page.component';

import { UsersComponent } from './Components/users/users.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
      path:"",
      redirectTo: "login",
      pathMatch: "full"
    },
    {
      path: "resetpassword",
      component: ResetPasswordComponent
    },
    {
      path: "login",
      component: LoginPageComponent
    },
    {
      path: "principale",
      component: PrincipalePageComponent,
  
    }
  ];