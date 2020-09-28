import { Module } from '@nestjs/common';
import { DesignersController } from './designers/designers.controller';
import { DesignersService } from './designers/designers.service';
import { FirestoreService } from '../firestore/firestore/firestore.service';

@Module({
  controllers: [DesignersController],
  providers: [DesignersService,FirestoreService]
})
export class DesignersModule {}
