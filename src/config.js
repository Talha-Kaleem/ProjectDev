const config =
  process.env.NODE_ENV === 'production'
    ? 'https://fc0e-2400-adc1-41d-3c00-806a-fc5-394b-605a.ngrok-free.app/'
    : 'http://localhost:4000';

export default config;
