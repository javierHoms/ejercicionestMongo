import { Controller, Param,  Get } from '@nestjs/common';
import { Libro } from '../libro';
@Controller('libro')
export class LibroController {
	libros: Libro[] = [{'id':1, 'titulo':'Don Quijote de la Mancha','autor':'Cervantes','fecha':new Date(1605,1,1,0,0,0,0)}, 
						{'id':2, 'titulo':'La Colmena','autor':'Camilo José Cela','fecha':new Date(1951,1,1,0,0,0,0)}];
	@Get()					
	findAll():Libro[] {
		
		return this.libros;
	}
	
	
	@Get('/:id')
	getById(@Param() params): Libro {
		
		let found: boolean = false;
		let id: number = undefined;
		
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
		
	}
	
	
}
