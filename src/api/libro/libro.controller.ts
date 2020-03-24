import { Controller, Get } from '@nestjs/common';
import { Libro } from '../libro';
@Controller('libro')
export class LibroController {
	@Get()
	findAll():Libro[] {
		return [];
	}
}
