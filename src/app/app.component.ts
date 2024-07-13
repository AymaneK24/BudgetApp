import { Component,Inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginPageComponent } from "./Components/login-page/login-page.component";
import { PrincipalePageComponent } from './Components/principale-page/principale-page.component';
import { OrganismesPageComponent } from './Components/organismes-page/organismes-page.component';
import { GbdoforgPageComponent } from './Components/gbdoforg-page/gbdoforg-page.component';
import { GbdoforgendPageComponent } from './Components/gbdoforgend-page/gbdoforgend-page.component';
import { FormoforganismePageComponent } from "./Components/formoforganisme-page/formoforganisme-page.component";
import { CommonModule } from '@angular/common';







@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    LoginPageComponent,
    PrincipalePageComponent,
    OrganismesPageComponent,
    GbdoforgPageComponent,
    GbdoforgendPageComponent,
    GbdoforgPageComponent,
    FormoforganismePageComponent,
    CommonModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})




export class AppComponent {
  title = 'projet';
}



