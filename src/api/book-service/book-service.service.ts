import { Injectable } from '@nestjs/common';
import { Libro } from '../libro';
import { BookList } from '../book-list';
import { OneBook } from '../one-book';
import { BookDto } from '../book-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()


export class BookServiceService {
    private books: Libro[] = [{'id':1, 'titulo':'Don Quijote de la Mancha','autor':'Cervantes','fecha':new Date(1605,1,1,0,0,0,0)}, 
                {'id':2, 'titulo':'La Colmena','autor':'Camilo José Cela','fecha':new Date(1951,1,1,0,0,0,0)}];
     
    constructor(@InjectModel('Book') private readonly modelo: Model<BookDto>) {
        // El contenido de InjectModel debe coincidir con la definición del Schma
    }

    // Get all books from Mongo
    async getBooks(): Promise<Libro[]> {
    
        return  await this.modelo.find().exec();
    } //end find all books

   

/*
    // Get all books
    getBooks(): BookList {
        const books = new BookList();
        books.status = 0;
        books.message = 'Ok';
        books.books = this.books;
        return books;
    } // end getBooks
*/
    // Get one Book
    getBookById(id: number): OneBook {
        const oneBook = new OneBook();
        const index = this.books.findIndex(function(value: Libro){
            return value.id == id;
        });
        if (index == -1){
            oneBook.status = -3;
            oneBook.message = 'The book with id:'+ id+ ' does not exist';
            oneBook.book = null;
        } else {
            oneBook.status = 0;
            oneBook.message = 'Ok';
            oneBook.book = this.books[index];
        }
        return oneBook;
    } // end getBookById

    // add Book
    addBook(newBook: Libro):OneBook{
        const oneBook = new OneBook();
        const found: boolean = 
            this.books.some(function(value: Libro){
                                return value.id == newBook.id;
                            }); 
        if (found){
            oneBook.status = -2;
            oneBook.message = 'The book already exists';
        } else{
            oneBook.status = 0;
            oneBook.message = 'Ok';
            this.books.push(newBook);
        }
        oneBook.book = newBook;
        return oneBook;
    } // end addBook

    // Modify book
    modifyBookById(updateBook: Libro): OneBook{
        const oneBook = new OneBook();
        const index = this.books.findIndex(function(value: Libro){
            return value.id == updateBook.id;
        });
        if (index == -1){
            oneBook.status = -3;
            oneBook.message = 'The book with id:'+ updateBook.id+ ' does not exist';
        } else {
            oneBook.status = 0;
            oneBook.message = 'Ok';
            this.books[index] = updateBook;
        }
        oneBook.book = updateBook;
        return oneBook;
    } // end modify book

    // delete book by id
    deleteBookById(id: number): OneBook{
        const oneBook = new OneBook();
        const index = this.books.findIndex(function(value: Libro){
            return value.id == id;
        });
        if (index == -1){
            oneBook.status = -3;
            oneBook.message = 'The book with id:'+ id+ ' does not exist';
            oneBook.book = null;
        } else {
            oneBook.status = 0;
            oneBook.message = 'Ok';
            oneBook.book = this.books[index];
            this.books.splice(index,1);
        }
        return oneBook;
    }

}
