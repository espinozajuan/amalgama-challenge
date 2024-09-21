'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LayoutDashboard,
  LogOut,
  User,
  CreditCard,
  Settings,
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <header className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
          <div className='flex items-center'>
            <LayoutDashboard className='h-8 w-8 text-primary mr-2' />
            <span className='text-xl font-bold'>User Dashboard</span>
          </div>
          <Button
            variant='outline'
            className='flex items-center'
            onClick={handleLogout}
          >
            <LogOut className='h-4 w-4 mr-2' />
            Logout
          </Button>
        </div>
      </header>

      <main className='flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Profile</CardTitle>
              <User className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>John Doe</div>
              <p className='text-xs text-muted-foreground'>
                john.doe@example.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Account Balance
              </CardTitle>
              <CreditCard className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>$1,234.56</div>
              <p className='text-xs text-muted-foreground'>
                +2.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Settings</CardTitle>
              <Settings className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>7</div>
              <p className='text-xs text-muted-foreground'>
                Active preferences
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
