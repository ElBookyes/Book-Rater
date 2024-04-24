import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
    {
      id: 1,
      title: "Abroad in Japan",
      description: "Chris Broad explores Japan in all its quirky glory..Endlessly fascinating",
      author: ["Chris Broad"],
      img: "",
      rating: []
  },
  {
    id: 2,
    title: "The Lord of the Rings",
    description: "A fantasy epic by J.R.R. Tolkien",
    author: ["J.R.R. Tolkien"],
    img: "",
    rating: []
  },
  {
      id: 3,
      title: "The Great Gatsby",
      description: "A novel by F. Scott Fitzgerald",
      author: ["F. Scott Fitzgerald"],
      img: "",
      rating: []
  },
  {
      id: 4,
      title: "The Catcher in the Rye",
      description: "A novel by J.D. Salinger",
      author: ["J.D. Salinger"],
      img: "",
      rating: []
  },
  {
      id: 5,
      title: "Pride and Prejudice",
      description: "A novel by Jane Austen",
      author: ["Jane Austen"],
      img: "",
      rating: []
  },
  {
      id: 6,
      title: "The Hobbit",
      description: "A fantasy novel by J.R.R. Tolkien",
      author: ["J.R.R. Tolkien"],
      img: "",
      rating: []
  },
  {
      id: 7,
      title: "To the Lighthouse",
      description: "A novel by Virginia Woolf",
      author: ["Virginia Woolf"],
      img: "",
      rating: []
  },
  {
      id: 8,
      title: "Moby-Dick",
      description: "A novel by Herman Melville",
      author: ["Herman Melville"],
      img: "",
      rating: []
  },
  {
      id: 9,
      title: "The Lord of the Rings",
      description: "A fantasy epic by J.R.R. Tolkien",
      author: ["J.R.R. Tolkien"],
      img: "",
      rating: []
  },
  {
      id: 10,
      title: "Jane Eyre",
      description: "A novel by Charlotte Bronte",
      author: ["Charlotte Bronte"],
      img: "",
      rating: []
  }
  ];

  getAllBooks(): Book[] {
    // Retrieve list of books
    // Implement logic here
    return this.books;
  }

  updateBook(book: Book) {
    // Update book details
    // Implement logic here
  }

  calculateAverageRating(book: Book): number {
    // Calculate average rating for a book
    // Implement logic here
    return 0; // Placeholder
  }
}
