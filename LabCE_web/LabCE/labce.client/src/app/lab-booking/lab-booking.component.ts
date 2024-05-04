import { Component } from '@angular/core';

@Component({
  selector: 'app-lab-booking',
  templateUrl: './lab-booking.component.html',
  styleUrl: './lab-booking.component.css'
})
export class LabBookingComponent {

  reservations = [
    { startHour: '09:00', endHour: '10:00', date: '03/01/2024', description: 'Datos 2', professor: 'Jane Smith' },
    { startHour: '07:30', endHour: '13:00', date: '01/05/2024', description: 'Datos 1', professor: 'John Doe' },
    { startHour: '10:00', endHour: '11:00', date: '03/01/2024', description: 'Datos 3', professor: 'John Doe' },
    { startHour: '11:00', endHour: '12:00', date: '03/01/2024', description: 'Datos 4', professor: 'Jane Smith' },
    { startHour: '08:00', endHour: '09:00', date: '04/01/2024', description: 'Datos 5', professor: 'John Doe' },
    { startHour: '09:00', endHour: '10:00', date: '04/01/2024', description: 'Datos 6', professor: 'Jane Smith' },
    { startHour: '10:00', endHour: '11:00', date: '04/01/2024', description: 'Datos 7', professor: 'John Doe' },
    { startHour: '11:00', endHour: '12:00', date: '04/01/2024', description: 'Datos 8', professor: 'Jane Smith' },
    { startHour: '08:00', endHour: '09:00', date: '05/01/2024', description: 'Datos 9', professor: 'John Doe' },
    { startHour: '09:00', endHour: '10:00', date: '05/01/2024', description: 'Datos 10', professor: 'Jane Smith' },
    { startHour: '10:00', endHour: '11:00', date: '05/01/2024', description: 'Datos 11', professor: 'John Doe' },
    { startHour: '11:00', endHour: '12:00', date: '05/01/2024', description: 'Datos 12', professor: 'Jane Smith' }
  ];

  calculateHours(startHour: string, endHour: string) {
    const start = startHour.split(':');
    const end = endHour.split(':');
    const startMinutes = parseInt(start[0]) * 60 + parseInt(start[1]);
    const endMinutes = parseInt(end[0]) * 60 + parseInt(end[1]);
    const hours = (endMinutes - startMinutes) / 60;
    const roundedHours = Math.ceil(hours);
    return roundedHours;
  }

  calculateDayOfWeek(date: string) {
    const parts = date.split('/');
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const year = parseInt(parts[2]);
    const dateObject = new Date(year, month - 1, day);
    return dateObject.getDay();
  }

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
