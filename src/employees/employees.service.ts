import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeesInput } from './inputs/employees.input';
import { Employees } from './interfaces/employees.interface';

@Injectable()
export class EmployeesService {
  constructor(@InjectModel('Employees') private readonly employeesModel: Model<Employees>) {}

  async create(createEmployeesDto: EmployeesInput): Promise<Employees> {
    const createdEmployees = new this.employeesModel(createEmployeesDto);
    return await createdEmployees.save();
  }

  async findAll(): Promise<Employees[]> {
    return await this.employeesModel.find().exec();
  }
}