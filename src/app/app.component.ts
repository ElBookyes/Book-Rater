import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Book } from './book';
import { BookService } from './book.service';
import { StarRatingComponent } from './star-rating/star-rating.component';;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, StarRatingComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  books: Book[];
  currentBook!: Book;
  currentIndex: number = 3;

  constructor(private bookService: BookService) {
    this.books = this.bookService.getAllBooks();
  }

  ngOnInit() {
    this.books = this.bookService.getAllBooks();
    this.currentBook = this.books[this.currentIndex];
  }
}

// 5 / 10 books
// title, description, author/authors, rating
// Visualize 1 book at a time and make a way to rate them (1-5 stars)
// Average current rating, and a book can be rated multiple times by the same user
// The user can change the name of the author, the title, and the description of the book.
// The changes are made only after the book is rated with the click of a button.
// After a book is rated it automatically goes to the next book in the list.
// After all books have been rated ask the user if he wants to rate them again or exit the app.

// Създаване на колекция с книги - съдържаща точните полета
// Визуализация на книгата
// Визуализация на реитингов механизъм за оценка с бутони
// Функционалност за предвижване на колекцията с книги към следващата книга след оценка
// Редакция на книгите
// Качете промените си в GitHub
// + Допълнителни задания (last task)

