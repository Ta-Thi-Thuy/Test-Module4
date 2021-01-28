import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from "../book.service";
// import {count} from "rxjs/operators";
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books!:any;
  id!:any;
  submitted = false;                                                             
  number: number = 1
  service: any;
  
 
  constructor(
    private bookService: BookService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.reloadData();
  }
 
  reloadData() {
    this.bookService.getBookList().subscribe(
      data =>{
        this.books = data
      },error =>{
        console.log(error);
      }
    )
  }

  deleteBook(id: number){
    this.bookService.deleteBook(id).subscribe(
      data => {
        this.reloadData();
      },(error: any) => console.log(error)
    )
  }
  updateBook(id: number){
    this.router.navigate(['update', id]);
  }
}
