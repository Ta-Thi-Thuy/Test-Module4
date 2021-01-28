import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'books',component: BookListComponent
  },
  {
    path:'books/create',component: CreateBookComponent
  },
  {
    path:'books/update/:id',component: UpdateComponent
  },
  {
path:'books/detail/:id',component:BookDetailComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
