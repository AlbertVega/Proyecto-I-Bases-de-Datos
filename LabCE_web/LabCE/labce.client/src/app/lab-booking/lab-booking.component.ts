import { Component } from '@angular/core';

@Component({
  selector: 'app-lab-booking',
  templateUrl: './lab-booking.component.html',
  styleUrl: './lab-booking.component.css'
})
export class LabBookingComponent {

  dateOfWeek = [];

  reservations = [
    { startHour: '09:00', endHour: '10:30', day: 'Viernes', description: 'Datos 2', professor: 'Jane Smith' },
    { startHour: '10:45', endHour: '12:15', day: 'Viernes', description: 'Datos 2', professor: 'Jane Smith' },
    { startHour: '12:30', endHour: '14:00', day: 'Viernes', description: 'Datos 2', professor: 'Jane Smith' },
    { startHour: '14:15', endHour: '15:45', day: 'Viernes', description: 'Datos 2', professor: 'Jane Smith' },
    { startHour: '16:00', endHour: '17:30', day: 'Viernes', description: 'Datos 2', professor: 'Jane Smith' },
    { startHour: '17:45', endHour: '19:15', day: 'Viernes', description: 'Datos 2', professor: 'Jane Smith' },
    { startHour: '09:00', endHour: '10:30', day: 'Martes', description: 'Datos 2', professor: 'Jane Smith' },
    { startHour: '10:45', endHour: '12:15', day: 'Martes', description: 'Datos 2', professor: 'Jane Smith' },
    { startHour: '12:30', endHour: '14:00', day: 'Martes', description: 'Datos 2', professor: 'Jane Smith' },
    { startHour: '14:15', endHour: '15:45', day: 'Martes', description: 'Datos 2', professor: 'Jane Smith' },
    { startHour: '16:00', endHour: '17:30', day: 'Martes', description: 'Datos 2', professor: 'Jane Smith' },
    { startHour: '17:45', endHour: '19:15', day: 'Martes', description: 'Datos 2', professor: 'Jane Smith' },
    { startHour: '09:00', endHour: '10:30', day: 'Miercoles', description: 'Datos 2', professor: 'Jane Smith' },
    { startHour: '10:45', endHour: '12:15', day: 'Miercoles', description: 'Datos 2', professor: 'Jane Smith' },
  ];

  hasReservationsForDay(day: string) {
    return this.reservations.some(reservation => reservation.day === day);
  }

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
