import { ICareerFilter } from '../intefaces/career-filter.inteface';

export class SalaryFilterStrategy implements ICareerFilter {
  constructor(private minSalary?: number) {}

  filter(careers: any[]): any[] {
    if (!this.minSalary) return careers;
    return careers.filter((career) => career.salary >= this.minSalary);
  }
}
