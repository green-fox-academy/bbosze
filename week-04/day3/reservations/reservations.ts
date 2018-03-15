'use strict'

interface Reservations {
  getDowBooking(): string;
  getCodeBooking(): string;
}


class Reservation implements Reservations {
daysOfTheWeek: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
bookingDay: string
bookingCode: string;

  constructor() {
    this.bookingCode = this.getCodeBooking()
    this.bookingDay = this.getDowBooking()
  }
  getDowBooking() {
  return this.daysOfTheWeek[Math.floor(Math.random() * 7)];
  }

  getCodeBooking() {
  return Math.random().toString(35).toUpperCase().substring(5)
  }
}


class Hotel {
  reservations: Reservation[] = [];
  constructor() {
    this.reservations = [];
  }

  addReservation(newRes) {
    this.reservations.push(newRes);
  }

  printReservations() {
    for (let i: number = 0; i < this.reservations.length; i++) {
      console.log(`Booking ${i + 1}: ${this.reservations[i].bookingCode} for ${this.reservations[i].bookingDay}`);
    }
  }
}

let hotel1 = new Hotel()
hotel1.addReservation(new Reservation)
hotel1.addReservation(new Reservation)
hotel1.addReservation(new Reservation)
hotel1.addReservation(new Reservation)
hotel1.addReservation(new Reservation)


hotel1.printReservations();
