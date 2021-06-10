import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import {  EmployeesType } from "./dto/create-employees.dto";
import { EmployeesService } from "./employees.service";
import { EmployeesInput } from "./inputs/employees.input";

@Resolver()
export class EmployeesResolver {
  constructor(
    private readonly employeesService: EmployeesService,
  ) {} 
  @Query(()=> String)
  async hello(){
      return 'hello';
  }
  @Query(()=> [EmployeesType])
  async employees(){
      return this.employeesService.findAll();
  }
  @Mutation(()=> EmployeesType)
  async createEmployees(@Args('input') input: EmployeesInput){
      return this.employeesService.create(input);
  }
 }

 

