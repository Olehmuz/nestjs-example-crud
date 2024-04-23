import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CareersService } from './careers.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { SalaryFilterStrategy } from './filter/strategies/salary-filter.strategy';
import { LocationFilterStrategy } from './filter/strategies/location-filter.strategy';
import { FilterService } from './filter/filter.service';

@Controller('careers')
export class CareersController {
  constructor(
    private readonly filterService: FilterService,
    private readonly careersService: CareersService,
  ) {}

  @Post()
  create(@Body() createCareerDto: CreateCareerDto) {
    return this.careersService.create(createCareerDto);
  }

  @Get()
  async getCareers(
    @Query('salary') salary: number,
    @Query('location') location: string,
  ) {
    if (salary) {
      this.filterService.setFilterStrategy(new SalaryFilterStrategy(salary));
    } else if (location) {
      this.filterService.setFilterStrategy(
        new LocationFilterStrategy(location),
      );
    } else {
      this.filterService.setFilterStrategy(null);
    }

    const careers = await this.careersService.findAll();

    const filteredCareers = this.filterService.filterCareers(careers);
    return filteredCareers;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCareerDto: UpdateCareerDto) {
    return this.careersService.update(id, updateCareerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.careersService.remove(id);
  }
}
