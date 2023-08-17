import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-default',
  templateUrl: './alert-default.component.html',
  styleUrls: ['./alert-default.component.css']
})
export class AlertDefaultComponent {
  
  public alertButtons = ['OK'];

  @Input() messageAlert : string = "Error" 
  @Input() header : string = "Error" 
  @Input() isAlertOpen = false;

  setOpenAlert(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
