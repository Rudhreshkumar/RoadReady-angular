import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf,NavbarComponent],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  title: string = '';
  price: number | undefined;
  description: string = '';
  category: string = '';
  qty: number | undefined;
  categories: string[] = ['FICTION', 'SCIENCE', 'SPACE'];
  successMsg: string | undefined = undefined;
  errorMsg: string | undefined = undefined;

  constructor(private bookService: BookService) {}

  onAddBook() {
    this.bookService.AddBook({
      title: this.title,
      price: this.price,
      description: this.description,
      category: this.category,
      qty: this.qty
    }).subscribe({
      next: (data) => {
        this.successMsg = 'Book added successfully!';
        this.errorMsg = undefined;
        this.resetForm();
      },
      error: (err) => {
        this.successMsg = undefined;
        console.log(err);
        this.errorMsg = err.message;
      }
    });
  }

  resetForm() {
    this.title = '';
    this.price = undefined;
    this.description = '';
    this.category = '';
    this.qty = undefined;
  }

}
