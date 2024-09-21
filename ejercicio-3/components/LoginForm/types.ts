export interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  errorMessage: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
