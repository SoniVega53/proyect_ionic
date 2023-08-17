import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reserList !: any[]

  @Input() isBtn = true;

  constructor(private travelService:TravelService,private userService: UserService){}
  
  ngOnInit(): void {
    this.getReservation()
  }

  getReservation() {
    this.travelService.getLoadReservations(this.userService.getInfoUser().idUser).subscribe(
      (response) => {
        if (response != null) {
          this.reserList = response
        }
           
      },
      (error) => {
       
      }
    );
  }

  getCancelReservation(id:string) {
    this.travelService.getLoadCancelById(id).subscribe(
      (response) => {
        this.getReservation()

      },
      (error) => {
        this.getReservation()
       
      }
    );
  }

  isActiveButton(status:string):boolean{
    if(!this.isBtn){
      return false;
    }else{
      return this.isStatus(status);
    }  

  }

  isStatus(status:string):boolean{
    return status == "activo"
  }

  isNotReser():boolean{
    return this.reserList?.length > 0;
  }
}
