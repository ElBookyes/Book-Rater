import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
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
}
