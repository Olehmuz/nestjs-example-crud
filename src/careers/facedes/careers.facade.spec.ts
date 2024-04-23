import { Test, TestingModule } from '@nestjs/testing';
import { CareersFacade } from './careers.facade';
import { CareersService } from '../careers.service';
import { Logger } from './../../common/logger/nest-js-logger.adapter';
import { Career } from '@prisma/client';

describe('CareersFacade', () => {
  let facade: CareersFacade;
  let careersService: CareersService;
  let logger: Logger;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CareersFacade,
        {
          provide: CareersService,
          useValue: {
            findOne: jest.fn(),
          },
        },
        {
          provide: Logger,
          useValue: {
            error: jest.fn(),
          },
        },
      ],
    }).compile();

    facade = module.get<CareersFacade>(CareersFacade);
    careersService = module.get<CareersService>(CareersService);
    logger = module.get<Logger>(Logger);
  });

  it('should be defined', () => {
    expect(facade).toBeDefined();
  });

  it('should return career details if career is found', async () => {
    const mockCareer = {
      id: '123',
      title: 'Developer',
      location: 'Kyiv',
    } as Career;
    jest.spyOn(careersService, 'findOne').mockResolvedValue(mockCareer);

    const result = await facade.getCareerDetails('123');
    expect(result).toEqual({ career: mockCareer, success: true });
    expect(careersService.findOne).toHaveBeenCalledWith('123');
  });

  it('should log an error and return null if career is not found', async () => {
    jest.spyOn(careersService, 'findOne').mockResolvedValue(null);

    const result = await facade.getCareerDetails('unknown');
    expect(result).toBeNull();
    expect(logger.error).toHaveBeenCalledWith('Career not found');
  });
});
