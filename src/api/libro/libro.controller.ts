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
	findAll():Promise<Libro[]> {
		return this.bookService.getBooks();
	} // end find all books

	@Post()
	addBook(@Body() newBook:Libro):Promise<Libro>{
		return this.bookService.create(newBook);
	}

	@Get(':id')
	findOne(@Param('id') id: string): Promise<Libro> {
		return this.bookService.findById(id);
	}

	@Put()
	async update(@Body() book:Libro):Promise<Libro>  {
		return await this.bookService.updateById(book);
	}

	@Delete(':id')
	remove(@Param('id') id: string): Promise<Libro> {
		return this.bookService.delete(id);
}

	

}
