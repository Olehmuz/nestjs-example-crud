import { ICareerFilter } from '../intefaces/career-filter.inteface';

export class LocationFilterStrategy implements ICareerFilter {
  constructor(private location: string) {}

  filter(careers: any[]): any[] {
    return careers.filter((career) => career.location === this.location);
  }
}
