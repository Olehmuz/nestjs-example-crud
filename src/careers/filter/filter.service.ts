import { Career } from '@prisma/client';
import { ICareerFilter } from './intefaces/career-filter.inteface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FilterService {
  private filterStrategy: ICareerFilter;
  constructor() {}

  setFilterStrategy(strategy: ICareerFilter) {
    this.filterStrategy = strategy;
  }

  filterCareers(careers: Career[]): Career[] {
    if (!this.filterStrategy) {
      return careers;
    }
    return this.filterStrategy.filter(careers);
  }
}
