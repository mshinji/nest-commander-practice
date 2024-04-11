import { Command, CommandRunner } from 'nest-commander';
import { BooksService } from 'src/books/books.service';

@Command({ name: 'console-books', description: 'getBooksの中身を出力' })
export class ConsoleBooksCommand extends CommandRunner {
  constructor(private readonly booksService: BooksService) {
    super();
  }

  async run(): Promise<void> {
    console.log(this.booksService.getBooks());
  }
}
