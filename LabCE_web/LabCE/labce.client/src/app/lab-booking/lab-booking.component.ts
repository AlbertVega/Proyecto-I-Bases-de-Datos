import { Component } from '@angular/core';

@Component({
  selector: 'app-lab-booking',
  templateUrl: './lab-booking.component.html',
  styleUrl: './lab-booking.component.css'
})
export class LabBookingComponent {
  //for eg: [{startDate: '01/01/2020', endDate: '07/01/2020'}, {startDate: '08/01/2020', endDate: '14/01/2020'}, {startDate: '15/01/2020', endDate: '21/01/2020'}, {startDate: '22/01/2020', endDate: '28/01/2020'}]
  getWeeks() {
    const currentDate = new Date();
    const weeks = [];
    for (let i = 0; i < 4; i++) {
      const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i * 7 - currentDate.getDay() + 1);
      const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i * 7 - currentDate.getDay() + 5);
      weeks.push({
        startDate: `${startDate.getDate()}/${startDate.getMonth() + 1}`,
        endDate: `${endDate.getDate()}/${endDate.getMonth() + 1}`
      });
    }
    return weeks;
  }

  //display the weeks obtained from getWeeks() method into the radio toggle buttons
  weeks = this.getWeeks();
  startdate_week1 = this.weeks[0].startDate;
  enddate_week1 = this.weeks[0].endDate;
  startdate_week2 = this.weeks[1].startDate;
  enddate_week2 = this.weeks[1].endDate;
  startdate_week3 = this.weeks[2].startDate;
  enddate_week3 = this.weeks[2].endDate;
  startdate_week4 = this.weeks[3].startDate;
  enddate_week4 = this.weeks[3].endDate;

  

}
