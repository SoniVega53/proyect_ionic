import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email !: string;
  password !: string;
  name !: string;
  lastname !: string;
  phone !: string;
  isAlertOpen = false;
  public alertButtons = ['OK'];

  constructor(private user: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  
  onInputChange(): boolean {
    return this.email == undefined || this.email == "" || this.password == undefined || this.password == "" || this.name == undefined || this.name == "" ||
      this.lastname == undefined || this.lastname == "" || this.phone == undefined || this.phone == ""
  }

  registre() {
    this.user.postRegistre(this.email, this.password, this.name, this.lastname, this.phone).subscribe(
      (response) => {
        if (response != null) {
          this.user.getLogin(response.email, response.password).subscribe(
            (res: any) => this.getUserLogin(res)
          );
        }
      },
      (error) => {
        if (error.status == "401") {
          this.setOpen(true)
        }

      }
    );
  }

  getUserLogin(response: any) {
    if (response != null) {
      this.user = response;
      window.sessionStorage.setItem('user', JSON.stringify(response))
      this.router.navigate(['/home']);

    }
  }
}
