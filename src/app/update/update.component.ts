import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  book!: any
  id!: any;
  // positionSeverice!: any;
  

  constructor(
    private bookService: BookService,
    private router: Router,
    private route:ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.book = new Book();
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBook(this.id).subscribe(
      data=> {
        this.book = data;
        console.log(this.book);
      }, error =>{
         console.log(error);
      }
    )
  }

  updateBook() {
    this.bookService.updateBook(this.id,this.book)
      .subscribe((data: any)  => {
        console.log(data);
        this.book= new Book();
        this.router.navigate(['books'])
      }, (error: any) => {console.log(error);
      }
      )
  }

  cancle() {
    this.router.navigate(['books'])
  }


}
