import Endpoints from "../../core/utils/Endpoints";

class AuthService {
  static async login(email: string, password: string): Promise<unknown> {
      try {
          const response = await fetch(`${Endpoints.BASE_URL}/users/otp`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email, password })
          });
          
          if (!response.ok) {
              throw new Error('Login failed');
          }
          
          return await response.json();
      } catch (error) {
          console.error('Error during login:', error);
          throw error;
      }
  }

  static async sendOtp(email: string): Promise<unknown> {
    try {
        const response = await fetch(`${Endpoints.BASE_URL}/users/otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
        
        if (!response.ok) {
            throw new Error('Failed to send OTP');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error sending OTP:', error);
        throw error;
    }
  }
  
  static async register(
      code: string,
      name: string,
      email: string,
      phone_number: string,
      password: string,
      role: string
  ): Promise<unknown> {
      try {
          const response = await fetch(`${Endpoints.BASE_URL}/users/`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ code, name, email, phone_number, password, role })
          });

          if (!response.ok) {
              throw new Error('Registration failed');
          }

          return await response.json();
      } catch (error) {
          console.error('Error during registration:', error);
          throw error;
      }
  }

  static async changePassword(code: string, password: string): Promise<unknown> {
      try {
          const response = await fetch(`${Endpoints.BASE_URL}/user/change-pw`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ code, password })
          });

          if (!response.ok) {
              throw new Error('Password change failed');
          }

          return await response.json();
      } catch (error) {
          console.error('Error changing password:', error);
          throw error;
      }
  }

}

export default AuthService;