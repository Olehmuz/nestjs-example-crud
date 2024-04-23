import { Injectable } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { CareersRepository } from './careers.repository';

@Injectable()
export class CareersService {
  constructor(private readonly careersRepository: CareersRepository) {}
  create(createCareerDto: CreateCareerDto) {
    return this.careersRepository.createCareer(createCareerDto);
  }

  findAll() {
    return this.careersRepository.getCareersList();
  }

  findOne(id: string) {
    return this.careersRepository.findCareerById(id);
  }

  update(id: string, updateCareerDto: UpdateCareerDto) {
    return this.careersRepository.updateCareer(id, updateCareerDto);
  }

  remove(id: string) {
    return this.careersRepository.deleteCareer(id);
  }
}
