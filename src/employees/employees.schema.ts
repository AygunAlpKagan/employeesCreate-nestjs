import * as mongoose from 'mongoose';


export const EmployeesSchema = new mongoose.Schema({
  
  name: String,
  surname: String,
  age: Number,
  department: String,
  
});