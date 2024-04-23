import { Test, TestingModule } from '@nestjs/testing';
import { CareersController } from './careers.controller';
import { CareersService } from './careers.service';
import { CareersRepository } from './careers.repository';
import { PrismaService } from './../common/db/prisma.service';
import { FilterService } from './filter/filter.service';

describe('CareersController', () => {
  let controller: CareersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CareersController],
      providers: [
        CareersService,
        CareersRepository,
        PrismaService,
        FilterService,
      ],
    }).compile();

    controller = module.get<CareersController>(CareersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
