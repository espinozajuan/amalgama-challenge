'use client';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { useRouter } from 'next/navigation';

// Definir la interfaz para el contexto
interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

// Crear el contexto con valores iniciales
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('authToken', newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  const isAuthenticated = () => !!token;

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para consumir el contexto de autenticación
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
