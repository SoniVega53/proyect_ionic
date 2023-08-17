import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationListComponent } from 'src/app/component/reservation-list/reservation-list.component';
import { PublicityService } from 'src/app/services/publicity.service';
import { TravelService } from 'src/app/services/travel.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = ''
  publicitySelect: any = null
  cont: number = 0
  contPagin: number = 0
  pagin: number[] = []
  isError = false

  @ViewChild('reservation', { static: false }) reservation !: ReservationListComponent;

  constructor(private userService: UserService, private router: Router, private publiServi: PublicityService) {
    this.name = userService.getInfoUser().name + " " + userService.getInfoUser().lastname
    this.getPublicityCount()
  }

  ngOnInit(): void {

    this.getPublicity('0')
    if (!this.isError) {
      this.loadPublicity()
    }
  }

  getLogout() {
    this.userService.getLogout()
    window.location.reload()
  }

  getPublicity(index: string) {
    if (!this.isError) {
      this.publiServi.getLoadByIndex(index).subscribe(
        (response) => {
          if (response != null) {
            this.publicitySelect = response.publicitySelect
          }
          this.contIndex(response.count)
        },
        (error) => {
          this.isError = true;
        }
      );
    }

  }

  getPublicityCount() {
    this.publiServi.getLoadByIndex('0').subscribe(
      (response) => {
        this.paginatorCicle(response.count)
      }
    );
  }

  loadPublicity() {
    setInterval(() => {
      this.getPublicity(this.cont.toString())
    }, 10000);
  }

  contIndex(cont: number) {
    cont > this.cont ? this.cont++ : this.cont = 0
  }

  paginatorCicle(numb: number) {
    for (let i = 0; i <= numb; i++) {
      this.pagin.push(i);
    }
  }

  isValidSelector(num: number): boolean {
    return this.cont == num
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.getPublicity('0')
      if (!this.isError) {
        this.loadPublicity()
      }
      this.reservation.getReservation()
      event.target.complete();
    }, 500);
  }
}
