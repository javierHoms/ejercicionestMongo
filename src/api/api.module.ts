import { Module } from '@nestjs/common';
import { LibroController } from './libro/libro.controller';
import { BookServiceService } from './book-service/book-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book } from './SchemaBook';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: Book }])],
  controllers: [LibroController],
  providers: [BookServiceService]
})
export class ApiModule {}
