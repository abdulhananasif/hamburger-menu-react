import {StudentType} from '../types/student';

export const isStudentType = (
  student: StudentType | {}
): student is StudentType => {
  return (student as StudentType).name !== undefined;
};
