import { Component, OnInit } from '@angular/core';
import { Book } from "../book";
import { Router } from "@angular/router";
import { BookService } from "../book.service"
@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  book!: any;

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.book = new Book();
  }

  createBook() {

    console.log(this.book);
    this.bookService.createBook(this.book).subscribe(
      (data: any) => {
        console.log(data);
        this.book = new Book();

        this.router.navigate(['books']);
      },
      (error: any) => {
        console.log(error)
      }
    )
  }
  
  }
  

