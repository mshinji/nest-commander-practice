import { Module } from '@nestjs/common';

import { BooksModule } from 'src/books/books.module';
import { ConsoleBooksCommand } from './console-books.task';

@Module({
  imports: [BooksModule],
  providers: [ConsoleBooksCommand],
})
export class TasksModule {}
