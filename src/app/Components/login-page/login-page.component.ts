import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoggerService } from '../../logger.service';



@Component({
  selector: 'app-login-page',
  standalone : true,
  imports: [RouterModule ,FormsModule , CommonModule ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})


export class LoginPageComponent {



  loginObj : any =  {
      "EmailId": "",
      "Password": ""
  };


http = inject(HttpClient);

constructor(private router : Router,private log : LoggerService){  }

onLogin(){
  debugger;

  this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj).subscribe((res:any)=>{
    if(res.result){
      alert("Login Success");
      localStorage.setItem("theLogin",this.loginObj.User);
      this.router.navigateByUrl("/principale");
    }
    else{
      alert("Check User email or password ");
    }
  }); 
  this.taking();
  
   
}

taking() {
  this.log.emailusing = this.loginObj.EmailId;
}


 


}
