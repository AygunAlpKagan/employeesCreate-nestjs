import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class EmployeesType {
  @Field(() => ID)
   id: string;
   @Field()
  readonly name: string;
  @Field()
  readonly surname: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly department: string;
}