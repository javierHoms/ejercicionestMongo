import { Module } from '@nestjs/common';
import { LibroController } from './libro/libro.controller';
import { BookServiceService } from './book-service/book-service.service';

@Module({
  controllers: [LibroController],
  providers: [BookServiceService]
})
export class ApiModule {}
