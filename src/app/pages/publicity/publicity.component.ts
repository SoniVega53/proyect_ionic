import { Component, OnInit } from '@angular/core';
import { PublicityService } from 'src/app/services/publicity.service';

@Component({
  selector: 'app-publicity',
  templateUrl: './publicity.component.html',
  styleUrls: ['./publicity.component.css']
})
export class PublicityComponent implements OnInit{
  publicitySelect !: any[]

  constructor( private publiServi: PublicityService){}

  ngOnInit(): void {
    this.getPublicity()
  }

  getPublicity() {
    this.publiServi.getLoadAll().subscribe(
      (response) => {
        if (response != null) {
          this.publicitySelect = response
        }
           
      },
      (error) => {
       
      }
    );
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.getPublicity()
      event.target.complete();
    }, 500);
  }

  isEmpty():boolean{
    return this.publicitySelect?.length > 0;
  }
}
