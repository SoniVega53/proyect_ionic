import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit{
  journeysSelect !: any[]  


  constructor(private traveService:TravelService,private router: Router){}

  ngOnInit(): void {
    this.getJourneys()
  }

  getJourneys() {
    this.traveService.getLoadAll().subscribe(
      (response) => {
        if (response != null) {
          this.journeysSelect = response
        }
           
      },
      (error) => {
       
      }
    );
  }

  navPage(id: string) {
    this.router.navigate(['/reservation/',id]);
  }

  isEmpty():boolean{
    return this.journeysSelect?.length > 0;
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.getJourneys()
      event.target.complete();
    }, 500);
  }
}
