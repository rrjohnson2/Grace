import { Component, OnInit } from '@angular/core';
import { PopUp } from 'app/interfaces/pop_message';
import { popUpTime } from 'app/constants/app.constants';

@Component({
  selector: 'app-grace-notification',
  templateUrl: './grace-notification.component.html',
  styleUrls: ['./grace-notification.component.scss']
})
export class GraceNotificationComponent implements OnInit {
  public alerts: Array<PopUp> = [];
  constructor() { }

  ngOnInit() {
  }

  public addAlert(alert:PopUp)
  {
    this.alerts.push(alert);
    setTimeout(
      ()=>
      {
        this.closeAlert(alert);
      },
      popUpTime
    );
  }
  public closeAlert(alert: PopUp) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
}

}
