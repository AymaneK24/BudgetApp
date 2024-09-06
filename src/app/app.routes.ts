import { LoginPageComponent } from './Components/login-page/login-page.component';
import { Routes } from '@angular/router';
import { PrincipalePageComponent } from './Components/principale-page/principale-page.component';



export const routes: Routes = [
    {
      path:"",
      redirectTo: "login",
      pathMatch: "full"
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
