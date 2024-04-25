import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Book } from './book';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  currentBook!: Book;
  currentIndex: number = 0;
  faStar = faStar;
  isButtonDisabled: boolean = true;

  @Input() starRating: number = 0; 
  @Input() readonly: boolean = false;


  getAllBooks(): Book[] {
    return this.books;
  }

  getRating() {
    return this.books[this.currentIndex].rating;
  }

  ngOnInit() {
    this.books = this.getAllBooks();
    this.currentBook = this.books[this.currentIndex];
  }

  setRating(starRating: number): void {
    if (!this.readonly) {
      this.starRating = starRating;
      this.isButtonDisabled = false;
    }
  }

  nextBook(): void {
    this.books[this.currentIndex].rating.push(this.starRating);
    this.setRating(0);
    console.log(this.books[this.currentIndex].rating);
    this.currentIndex++;
    if (this.currentIndex >= this.books.length) {
      this.currentIndex = 0;
    }
    this.currentBook = this.books[this.currentIndex];
    this.isButtonDisabled = true;
  }

  changeBookTitle(title: string): void {
    this.books[this.currentIndex].title = title;
  }

  averageRating(): number {
    let sum = 0;
    for (let i = 0; i < this.books[this.currentIndex].rating.length; i++) {
      sum += this.books[this.currentIndex].rating[i];
    }
    return !this.books[this.currentIndex].rating.length ? 0 : (sum / this.books[this.currentIndex].rating.length).toFixed(2) as unknown as number;
  }

  books: Book[] = [
    {
      id: 1,
      title: 'Abroad in Japan',
      description:
        'Chris Broad explores Japan in all its quirky glory..Endlessly fascinating',
      author: ['Chris Broad'],
      img: '/assets/abroad-in-japan.jpg',
      rating: [],
    },
    {
      id: 2,
      title: 'The Lord of the Rings',
      description: 'A fantasy epic by J.R.R. Tolkien',
      author: ['J.R.R. Tolkien'],
      img: '/assets/the-lord-of-the-rings.jpg',
      rating: [],
    },
    {
      id: 3,
      title: 'The Great Gatsby',
      description: 'A novel by F. Scott Fitzgerald',
      author: ['F. Scott Fitzgerald'],
      img: '/assets/the-great-gatsby.webp',
      rating: [],
    },
    {
      id: 4,
      title: 'The Catcher in the Rye',
      description: 'A novel by J.D. Salinger',
      author: ['J.D. Salinger'],
      img: '/assets/the-catcher-in-the-rye.jpg',
      rating: [],
    },
    {
      id: 5,
      title: 'Pride and Prejudice',
      description: 'A novel by Jane Austen',
      author: ['Jane Austen'],
      img: '/assets/pride-and-prejudice.jpg',
      rating: [],
    },
    {
      id: 6,
      title: 'The Hobbit',
      description: 'A fantasy novel by J.R.R. Tolkien',
      author: ['J.R.R. Tolkien'],
      img: '/assets/the-hobbit.jpg',
      rating: [],
    },
    {
      id: 7,
      title: 'To the Lighthouse',
      description: 'A novel by Virginia Woolf',
      author: ['Virginia Woolf'],
      img: '/assets/to-the-lighthouse.jpg',
      rating: [],
    },
    {
      id: 8,
      title: 'Moby-Dick',
      description: 'A novel by Herman Melville',
      author: ['Herman Melville'],
      img: '/assets/moby-dick.jpg',
      rating: [],
    },
    {
      id: 9,
      title: 'The Alchemist',
      description: 'A novel by Paulo Coelho about a young Andalusian shepherd named Santiago who sets out on a journey to find a hidden treasure in Egypt, discovering valuable life lessons along the way.',
      author: ['Paulo Coelho"]'],
      img: '/assets/the-alchemist.jpg',
      rating: [],
    },
    {
      id: 10,
      title: 'Jane Eyre',
      description: 'A novel by Charlotte Bronte',
      author: ['Charlotte Bronte'],
      img: '/assets/jane-eyre.jpg',
      rating: [],
    },
  ];
}


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

