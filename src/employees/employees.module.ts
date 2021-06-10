import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesResolver } from './employees.resolver';
import { EmployeesSchema } from './employees.schema';
import { EmployeesService } from './employees.service';

@Module({
imports:[MongooseModule.forFeature([{ name: 'Employees', schema: EmployeesSchema }])],
  providers: [EmployeesResolver,EmployeesService],
})
export class EmployeesModule {}
