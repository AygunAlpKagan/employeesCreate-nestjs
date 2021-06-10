import { Document } from 'mongoose';

export interface Employees extends Document {
  readonly name: string;
  readonly surname: string;
  readonly age: number;
  readonly department: string;
  
}
