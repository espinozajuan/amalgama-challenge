export interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  errorMessage: string;
  isSubmitting: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
