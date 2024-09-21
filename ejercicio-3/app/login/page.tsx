'use client';
import { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { loginUser } from '@/lib/services/api';
import LoginForm from '@/components/LoginForm/LoginForm';

const LoginPage = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      router.push('/dashboard');
    }
  }, [router]);

  const login = async (email: string, password: string) => {
    try {
      setError('');
      const data = await loginUser({ email, password });

      localStorage.setItem('authToken', data.token);
      router.push('/dashboard');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response && err.response.status === 401) {
          setError('Invalid credentials. Please try again.');
        } else {
          setError('An error occurred. Please try again later.');
        }
      }
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <LoginForm onSubmit={login} errorMessage={error} />
      </Card>
    </div>
  );
};

export default LoginPage;
