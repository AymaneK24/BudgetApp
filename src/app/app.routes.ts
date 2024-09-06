import { LoginPageComponent } from './Components/login-page/login-page.component';
import { Routes } from '@angular/router';
import { PrincipalePageComponent } from './Components/principale-page/principale-page.component';
import { authGuard } from './guard/auth.guard';



export const routes: Routes = [
    {
      path:"",
      redirectTo: "login",
      pathMatch: "full"
    },
    {
      path: "login",
      component: LoginPageComponent, 
      canActivate : [authGuard]
    },
    {
      path: "principale",
      component: PrincipalePageComponent,
  
    }
  ];
