import { Module } from '@nestjs/common';
import { LibroController } from './libro/libro.controller';

@Module({
  controllers: [LibroController]
})
export class ApiModule {}
