export type TUser = {
  id: string;
  password: string;
  email: string;
  role?: 'admin' | 'faculty' | 'administrator' | 'staff';
  needPasswordChanged: boolean;
  status: 'blocked' | 'in-progress';
  isDeleted: boolean;
};
