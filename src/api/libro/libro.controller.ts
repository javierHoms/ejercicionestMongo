import { Controller, Param,  Get, Body, Post, Put, Delete } from '@nestjs/common';
import { Libro } from '../libro';

@Controller('libro')
export class LibroController {
	libros: Libro[] = [{'id':1, 'titulo':'Don Quijote de la Mancha','autor':'Cervantes','fecha':new Date(1605,1,1,0,0,0,0)}, 
				{'id':2, 'titulo':'La Colmena','autor':'Camilo José Cela','fecha':new Date(1951,1,1,0,0,0,0)}];
	// Get all books
	@Get()					
	findAll():Libro[] {
		
		return this.libros;
	} // end findAll
	
	// Get book
	@Get('/:id')
	getById(@Param() params): Libro {
		
		let found: boolean = false;
		
		let id: number = params.id;
		for(let i = 0; i < this.libros.length && !found; i++){
			if (params.id == this.libros[i].id){
				found = true;
				id = i;
			}
		}
		
		if (found){
			return this.libros[id];
		}else{
			return null; 
		}
		
	} // end getById
	
	
	// add book
	@Post()
	addBook(@Body() newBook: Libro): Libro {
		
		let found: boolean = false;
		let id: number = newBook.id;
		found = this.libros.some(function(libro: Libro){
			return libro.id == id ;
		});
		if (found){
			return null;
		}else{
			this.libros.push(newBook);
			return newBook;
		}
	} //end addBook
	
	//Modify book
	@Put('/:id')
	modifyById(@Param() params, @Body() revisedBook: Libro){
		
		let found: boolean = false;
		
		let id: number = params.id;
		for(let i = 0; i < this.libros.length && !found; i++){
			if (params.id == this.libros[i].id){
				found = true;
				id = i;
			}
		}
		
		if (found){
			this.libros[id]=revisedBook;
			return this.libros[id];
		}else{
			return null;
		}
	} // end modifyById
	
	@Delete('/:id')
	deleteById(@Param() params): Libro {
		let found: boolean = false;
		let deletedBook: Libro;
		let id: number = params.id;
		for(let i = 0; i < this.libros.length && !found; i++){
			if (params.id == this.libros[i].id){
				found = true;
				id = i;
			}
		}
		
		if (found){
			deletedBook = this.libros[id];
			this.libros.splice(id,1);
			return deletedBook;
		}else{
			return null;
		}
	} // end modifyById
	
	
}
