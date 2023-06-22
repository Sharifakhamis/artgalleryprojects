import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { BookServiceService } from 'src/app/services/book-service.service';
// import {Booking} from ''


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  constructor(private bookServiceService: BookServiceService){

  }
  bookings!: Book[];
  ngOnInit(): void {
    this.bookServiceService.getBookingsList().subscribe(data => {
      this.bookings = data;
    } );
    // throw new Error('Method not implemented.');
  }
  private BookingsList(){

  }
  // bookings: Book[] = [];

  


}