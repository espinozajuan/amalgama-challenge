'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { useAuth } from '@/context/AuthContext';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated()) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <LoadingSpinner className='h-8 w-8' />{' '}
      </div>
    );
  }

  return <>{children}</>;
}
