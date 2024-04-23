import { Module } from '@nestjs/common';
import { CareersService } from './careers.service';
import { CareersController } from './careers.controller';
import { CareersRepository } from './careers.repository';
import { PrismaService } from 'src/common/db/prisma.service';
import { FilterService } from './filter/filter.service';

@Module({
  controllers: [CareersController],
  providers: [CareersService, CareersRepository, PrismaService, FilterService],
})
export class CareersModule {}
