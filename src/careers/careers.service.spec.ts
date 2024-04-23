import { Test, TestingModule } from '@nestjs/testing';
import { CareersService } from './careers.service';
import { CareersRepository } from './careers.repository';
import { PrismaService } from './../common/db/prisma.service';

describe('CareersService', () => {
  let service: CareersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CareersService, CareersRepository, PrismaService],
    }).compile();

    service = module.get<CareersService>(CareersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
