const config = {
  get apiBaseUrl(): string {
    return process.env.NEXT_PUBLIC_API_BASE_URL || '';
  },
};

export default config;
