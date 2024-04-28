import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from './bookInterface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  currentBook!: Book;
  currentIndex: number = 0;
  isButtonDisabled: boolean = true;
  editMode: boolean = false;
  finished: boolean = false;
  nahImGood: boolean = false;
  faStar = faStar;

  @Input() starRating: number = 0; 
  @Input() readonly: boolean = false;

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
      this.finished = true;
    }
    this.currentBook = this.books[this.currentIndex];
    this.isButtonDisabled = true;
  }

  averageRating(): number {
    const ratings = this.books[this.currentIndex].rating;
    if (!ratings.length) return 0;
    const sum = ratings.reduce((total, rating) => total + rating, 0);
    return +(sum / ratings.length).toFixed(2);
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  reset(): void {
    this.currentIndex = 0;
    this.currentBook = this.books[this.currentIndex];
    this.finished = false;
  }

  end(): void {
    this.finished = false;
    this.nahImGood = true;
  }
}

