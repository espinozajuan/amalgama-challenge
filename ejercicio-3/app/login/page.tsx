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
import { useAuth } from '@/context/AuthContext';

const LoginPage = () => {
  const [error, setError] = useState('');
  const router = useRouter();
  const { isAuthenticated, login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleLogin = async (email: string, password: string) => {
    setIsSubmitting(true);
    try {
      setError('');
      const data = await loginUser({ email, password });

      login(data.token);
      router.push('/dashboard');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response && err.response.status === 401) {
          setError('Invalid credentials. Please try again.');
        } else {
          setError('An error occurred. Please try again later.');
        }
      }
    } finally {
      setIsSubmitting(false);
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
        <LoginForm
          onSubmit={handleLogin}
          errorMessage={error}
          isSubmitting={isSubmitting}
        />
      </Card>
    </div>
  );
};

export default LoginPage;
