import { Schema, model } from 'mongoose';
import { TYgpaCalc } from './finalGpaCalculation.interface';
import { semesterResultSchema } from '../semesterResult/semesterResult.model';

const yearGpaCalcSchema = new Schema<TYgpaCalc>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  year: Number,
  yearGpa:{
    type:Number,
  },
  yearSemester: [semesterResultSchema],
});

export const yearGpaCalcModel = model('yearGpaCalc', yearGpaCalcSchema);
