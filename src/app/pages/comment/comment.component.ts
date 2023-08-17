import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  journeysSelect !: any;  
  commentList !: any; 
  desComment !: string; 
  params !: any;

  constructor(private traveService:TravelService,private router: Router,private route: ActivatedRoute,private userService: UserService){}

  ngOnInit(): void {
    this.getJourneys()
    this.getComment();
  }

  onInputChange(): boolean {
    return this.desComment == undefined || this.desComment == ""
  }

  getJourneys() {
    this.route.params.subscribe(param => {
      this.params = param
     
      this.traveService.getLoadPlaceJourneyById(this.params.id).subscribe(
        (response) => {
          if (response != null) {
            this.journeysSelect = response
          }
             
        },
        (error) => {
         
        }
      );
    });
  }

  getComment() {
    this.route.params.subscribe(param => {
      this.params = param
     
      this.traveService.getLoadAllCommentByJourney(this.params.id).subscribe(
        (response) => {
          if (response != null) {
            this.commentList = response
          
          }
             
        },
        (error) => {
         
        }
      );
    });
  }

  comment() {
    this.traveService.postComment(this.userService.getInfoUser().idUser,this.params.id,this.desComment).subscribe(
      (response) => {
        if (response != null) {
          this.getComment();
          this.desComment = ""
        }
      },
      (error) => {
        console.log(error)
      }
    );
  }
}
