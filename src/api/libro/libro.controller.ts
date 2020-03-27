import { Controller, Param,  Get, Body, Post, Put, Delete } from '@nestjs/common';
import { Libro } from '../libro';
import { BookList } from '../book-list';
import { BookServiceService } from '../book-service/book-service.service';
import { OneBook } from '../one-book';

@Controller('libro')
export class LibroController {
	constructor(private bookService: BookServiceService){
	}
	// Get all books
	@Get()					
	findAll():Promise<BookList> {
		return this.bookService.getBooks();
	} // end find all books

	// Get one book by id
	@Get('/:id')
	getById(@Param() param): OneBook{
		return this.bookService.getBookById(param.id);
	} // end find by id

	// Add book
	@Post()
	addBook(@Body() newBook: Libro) :OneBook{
		return this.bookService.addBook(newBook);
	} // end add book

	// Modify book
	@Put()
	modifyBookById(@Body() updateBook: Libro): OneBook {
		return this.bookService.modifyBookById(updateBook);
	} //end modify book

	@Delete('/:id')
	deleteBook(@Param() param): OneBook {
		return this.bookService.deleteBookById(param.id);
	}
	/*
	@Get()					
	findAll():Libro[] {
		
		return this.bookService.getBooks();
	} // end findAll
	
	// Get book
	@Get('/:id')
	getById(@Param() params): Libro {
		
		let found: boolean = false;
		
		let id: number = params.id;
		for(let i = 0; i < this.books.length && !found; i++){
			if (params.id == this.books[i].id){
				found = true;
				id = i;
			}
		}
		
		if (found){
			return this.books[id];
		}else{
			return null; 
		}
		
	} // end getById
	
	
	// add book
	@Post()
	addBook(@Body() newBook: Libro): Libro {
		
		let found: boolean = false;
		const id: number = newBook.id;
		found = this.books.some(function(libro: Libro){
			return libro.id == id ;
		});
		if (found){
			return null;
		}else{
			this.books.push(newBook);
			return newBook;
		}
	} //end addBook
	
	//Modify book
	@Put('/:id')
	modifyById(@Param() params, @Body() revisedBook: Libro){
		
		let found: boolean = false;
		
		let id: number = params.id;
		for(let i = 0; i < this.books.length && !found; i++){
			if (params.id == this.books[i].id){
				found = true;
				id = i;
			}
		}
		
		if (found){
			this.books[id]=revisedBook;
			return this.books[id];
		}else{
			return null;
		}
	} // end modifyById
	
	@Delete('/:id')
	deleteById(@Param() params): Libro {
		let found: boolean = false;
		let deletedBook: Libro;
		let id: number = params.id;
		for(let i = 0; i < this.books.length && !found; i++){
			if (params.id == this.books[i].id){
				found = true;
				id = i;
			}
		}
		
		if (found){
			deletedBook = this.books[id];
			this.books.splice(id,1);
			return deletedBook;
		}else{
			return null;
		}
	} // end modifyById
	
	*/
	

}
