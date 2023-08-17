import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email !: string;
  password !: string;
  isError : boolean = false;
  isAlertOpen = false;
  public alertButtons = ['OK'];
  
  constructor(private user: UserService, private router: Router) { }

  onInputChange(): boolean {
    return this.email == undefined || this.email == "" || this.password == undefined || this.password == ""
  }



  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  getUserLogin() {
    this.user.getLogin(this.email, this.password).subscribe(
      (response) => {
        if (response != null) {
          this.user = response;
          window.sessionStorage.setItem('user', JSON.stringify(response))
          window.sessionStorage.setItem('Session', "true")
          this.router.navigate(['/home']);
       
        }else{
          this.setOpen(true)
        }
      }
    );
    
  }
  
}
