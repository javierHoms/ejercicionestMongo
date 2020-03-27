import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ApiModule,
    MongooseModule.forRoot('mongodb://localhost:27017/Books',
    { useNewUrlParser: true, useUnifiedTopology: true })
  ],
  controllers: [AppController],
  providers: [AppService]

})
 
export class AppModule {}
