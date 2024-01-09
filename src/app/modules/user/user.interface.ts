export type TUser = {
  id: string;
  password: string;
  needPasswordChanged: boolean;
  role?: 'admin' | 'student' | 'faculty';
  status: 'blocked' | 'in-progress';
  isDeleted: boolean;
  email: string;
};
