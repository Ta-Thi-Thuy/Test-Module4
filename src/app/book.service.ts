import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // updateBook(id: any, book: any) {
  //   throw new Error('Method not implemented.');
  // }
  // createBook(book: Book) {
  //   throw new Error('Method not implemented.');
  // }
  

  private baseUrl = 'http://127.0.0.1:3000/books';

  constructor(private http: HttpClient) { }

 
  getBookList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createBook(value: any){
    return this.http.post(`${this.baseUrl}`,value);
  }

  deleteBook(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getBook(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  updateBook(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }


}
