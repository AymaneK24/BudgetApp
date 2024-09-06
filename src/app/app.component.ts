import { Component,Inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginPageComponent } from "./Components/login-page/login-page.component";
import { PrincipalePageComponent } from './Components/principale-page/principale-page.component';
import { CommonModule } from '@angular/common';







@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    LoginPageComponent,
    PrincipalePageComponent,
    CommonModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})




export class AppComponent {
  title = 'projet';
}



