// authService.js
export const loginUser = (email) => {
    // Simulate login logic, replace with actual API call for authentication
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email) {
          resolve({ email: email });
        } else {
          reject(new Error('Invalid email'));
        }
      }, 1000); // Simulate API delay
    });
  };
  
  export const logoutUser = () => {
    // Simulate logout logic, clear user data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500); // Simulate API delay
    });
  };
  