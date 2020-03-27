import { AnswerBook } from "./answer-book";
import { Libro } from './libro';

export class BookList extends AnswerBook {
    books: Promise<Libro[]>;
}
