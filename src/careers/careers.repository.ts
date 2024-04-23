import { Career } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { PrismaService } from './../common/db/prisma.service';

@Injectable()
export class CareersRepository {
  constructor(private prismaService: PrismaService) {}

  async createCareer(dto: CreateCareerDto): Promise<Career> {
    return await this.prismaService.career.create({ data: dto });
  }

  async updateCareer(id: string, dto: UpdateCareerDto): Promise<Career> {
    return await this.prismaService.career.update({ where: { id }, data: dto });
  }

  async deleteCareer(id: string): Promise<Career> {
    return await this.prismaService.career.delete({ where: { id } });
  }

  async findCareerByFilter(filter: any): Promise<Career | null> {
    return await this.prismaService.career.findFirst({ where: filter });
  }

  async findCareerById(id: string): Promise<Career | null> {
    return await this.prismaService.career.findFirst({ where: { id } });
  }

  async getCareersList(): Promise<Career[] | null> {
    return await this.prismaService.career.findMany();
  }
}
