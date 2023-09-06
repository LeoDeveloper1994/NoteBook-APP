import { useMutation } from '@tanstack/react-query';
import apiClient from '../utils/apiClient';
import { FieldValues, SubmitHandler } from 'react-hook-form';

interface NewUser {
  createdAt: string;
  email: string;
  id: number;
  role: string;
  status: string;
  updatedAt: string;
  user_name: string;
}
interface Objt {
  newUser: NewUser;
}
interface UserCreated {
  data: Objt;
  status: string;
}

interface Login {
  email: string;
  password: string;
}

export const useCreateUser = () => {
  const res = useMutation({
    mutationFn: async (body: SubmitHandler<FieldValues> | FieldValues) => {
      const req = await apiClient.post<UserCreated>('/users', body);
      return req;
    },
  });

  return res;
};

export const useLoginUser = () => {
  const res = useMutation({
    mutationFn: async (body: Login) => {
      const req = await apiClient.post('/users/login', body);
      return req;
    },
  });

  return res;
};
