// API Configuration
const API_BASE_URL = 'https://addvia-backend-20e7efe3c8ce.herokuapp.com/api';

// Add all the API integration code from earlier
const auth = {
  async signUp(userData) {
    try {
      // Map frontend field names to backend expectations
      const backendData = {
        firstName: userData.firstname,
        lastName: userData.lastname,
        email: userData.email,
        password: userData.password,
        company: userData.company,
        role: userData.role,
        interests: userData.interests
      };

      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(backendData)
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
      }
      
      return data;
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  }
};
