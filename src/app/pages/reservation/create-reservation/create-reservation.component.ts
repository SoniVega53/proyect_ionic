import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {
  observation !: string
  count !: string
  params !: any;
  journeySelect !: any;
  idReservation !: string;
  isAlertOpen = false;
  public alertButtons = ['OK'];
  messageAlert : string = "Error" 

  constructor(private travelService: TravelService, private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getPlaceId()
    this.getReservationUpdate()
  }

  getPlaceId() {
    this.route.params.subscribe(params => {
      this.params = params
    });

    this.travelService.getLoadPlaceById(this.params.id).subscribe(
      (response) => {
        if (response != null) {
          this.journeySelect = response;
        }

      },
      (error) => {

      }
    );
  }

  onInputChange(): boolean {
    return this.observation == undefined || this.observation == "" || this.count == undefined || this.count == ""
  }

  reservation() {
    if (this.idReservation) {
      this.travelService.postReservationUpdate(this.idReservation,this.userService.getInfoUser().idUser, this.params.id, this.observation, this.count).subscribe(
        (response) => {
          if (response != null) {
            this.router.navigate(['/home']);
          }
        },
        (error) => {
          this.messageAlert = error.error;
          this.setOpenAlert(true);
        }
      );
    } else {
      this.travelService.postReservation(this.userService.getInfoUser().idUser, this.params.id, this.observation, this.count).subscribe(
        (response) => {
          if (response != null) {
            this.router.navigate(['/home']);
          }
        },
        (error) => {
          this.messageAlert = error.error;
          this.setOpenAlert(true);
        }
      );
    }
  }

  getReservationUpdate() {
    this.route.params.subscribe(params => {
      this.params = params
    });

    this.travelService.getLoadReservationsJourney(this.userService.getInfoUser().idUser, this.params.id).subscribe(
      (response) => {
        if (response != null) {
          this.count = response.countPeople
          this.observation = response.observations
          this.onInputChange()
          this.idReservation = response.id
        }

      },
      (error) => {

      }
    );
  }

  setOpenAlert(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
