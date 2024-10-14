import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book/book.module';
import { BookService } from '../../service/book.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [NgIf,RouterLink],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements OnInit{
  book: Book | undefined;
  errorMsg: string | undefined;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
        this.bookService.getBookById(id).subscribe({
            next: (data) => {
                this.book = data;
            },
            error: (err) => {
                console.error('Error loading book details:', err);
                this.errorMsg = 'Failed to load book details';
            }
        });
    }
}
}
