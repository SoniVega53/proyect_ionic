import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  nameInfo: string = ''
  email !: string;
  password !: string;
  passwordAct !: string;
  name !: string;
  lastname !: string;
  phone !: string;
  isAlertOpen = false;
  public alertButtons = ['OK'];
  isToastOpen = false;



  constructor(private userService: UserService, private router: Router) {
    this.updateInfoInputs();

  }

  updateInfoInputs() {
    this.nameInfo = this.userService.getInfoUser().name + " " + this.userService.getInfoUser().lastname
    this.email = this.userService.getInfoUser().email
    this.name = this.userService.getInfoUser().name
    this.lastname = this.userService.getInfoUser().lastname
    this.phone = this.userService.getInfoUser().phone
    this.password = this.userService.getInfoUser().password
  }

  onInputChange(): boolean {
    return this.email == undefined || this.email == "" || this.password == undefined || this.password == "" || this.name == undefined || this.name == "" ||
      this.lastname == undefined || this.lastname == "" || this.phone == undefined || this.passwordAct == "" || this.passwordAct == undefined || this.passwordAct == ""
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  setOpenToast(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
  update() {
    this.userService.postUpdate(this.userService.getInfoUser().idUser, this.passwordAct, this.password, this.name, this.lastname, this.phone).subscribe(
      (response) => {
        if (response != null) {
          window.sessionStorage.setItem('user', JSON.stringify(response))
          window.sessionStorage.setItem('Session', "true")
          this.updateInfoInputs();
          this.passwordAct = ""
          this.setOpenToast(true)
        }
      },
      (error) => {
        if (error.status == "401") {
          this.setOpen(true)
        }

      }
    );
  }


}
