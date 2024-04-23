import { Injectable } from '@nestjs/common';
import { CareersService } from '../careers.service';
import { Logger } from './../../common/logger/nest-js-logger.adapter';

@Injectable()
export class CareersFacade {
  constructor(
    private careersService: CareersService,
    private logger: Logger,
  ) {}

  async getCareerDetails(careerId: string) {
    const career = await this.careersService.findOne(careerId);
    if (!career) {
      this.logger.error('Career not found');
      return null;
    }

    return {
      career,
      success: true,
    };
  }
}
