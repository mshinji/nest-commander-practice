import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  getBooks() {
    return [
      { id: 1, title: 'Book 1', author: 'Alice' },
      { id: 2, title: 'Book 2', author: 'Bob' },
      { id: 3, title: 'Book 3', author: 'Carol' },
    ];
  }
}
