import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class EmployeesInput {
  @Field()
  readonly name: string;
  @Field()
  readonly surname: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly department: string;
  
  
}