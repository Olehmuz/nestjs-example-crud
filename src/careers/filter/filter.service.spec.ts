import { Test, TestingModule } from '@nestjs/testing';
import { FilterService } from './filter.service';
import { Career } from '@prisma/client';

describe('FilterService', () => {
  let service: FilterService;
  let mockCareerData: Career[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilterService],
    }).compile();

    service = module.get<FilterService>(FilterService);
    mockCareerData = [
      { id: '1', title: 'Engineer', location: 'Kyiv', salary: 3000 },
      { id: '2', title: 'Developer', location: 'Lviv', salary: 4000 },
      { id: '3', title: 'Manager', location: 'Kyiv', salary: 3500 },
    ] as Career[];
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all careers if no filter strategy is set', () => {
    expect(service.filterCareers(mockCareerData)).toEqual(mockCareerData);
  });

  it('should filter careers by location', () => {
    const locationFilter = {
      filter: jest
        .fn()
        .mockImplementation((careers: Career[]) =>
          careers.filter((career) => career.location === 'Kyiv'),
        ),
    };
    service.setFilterStrategy(locationFilter);
    expect(service.filterCareers(mockCareerData)).toEqual([
      { id: '1', title: 'Engineer', location: 'Kyiv', salary: 3000 },
      { id: '3', title: 'Manager', location: 'Kyiv', salary: 3500 },
    ]);
    expect(locationFilter.filter).toHaveBeenCalledWith(mockCareerData);
  });

  it('should filter careers by salary', () => {
    const salaryFilter = {
      filter: jest
        .fn()
        .mockImplementation((careers: Career[]) =>
          careers.filter((career) => career.salary >= 3500),
        ),
    };
    service.setFilterStrategy(salaryFilter);
    expect(service.filterCareers(mockCareerData)).toEqual([
      { id: '2', title: 'Developer', location: 'Lviv', salary: 4000 },
      { id: '3', title: 'Manager', location: 'Kyiv', salary: 3500 },
    ]);
    expect(salaryFilter.filter).toHaveBeenCalledWith(mockCareerData);
  });
});
