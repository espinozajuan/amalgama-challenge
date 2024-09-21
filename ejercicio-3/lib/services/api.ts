import axios from 'axios';
import config from '../config';
import { LoginRequest, LoginResponse } from '../../components/LoginForm/types';

export const loginUser = async ({
  email,
  password,
}: LoginRequest): Promise<LoginResponse> => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  const response = await axios.post(`${config.apiBaseUrl}/login`, formData, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  return response.data;
};
