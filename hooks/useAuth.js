// Custom hook for authentication and user management
function useAuth() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Check if user is already logged in
  React.useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Error parsing stored user:', err);
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    setLoading(true);
    setError(null);

    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Here you would normally validate against a backend
        if (email === 'admin@example.com' && password === 'admin123') {
          const userData = {
            id: 1,
            email,
            name: 'Administrador',
            role: 'admin'
          };
          localStorage.setItem('authUser', JSON.stringify(userData));
          setUser(userData);
          setLoading(false);
          resolve(userData);
        } else {
          const err = new Error('Credenciales inválidas');
          setError(err.message);
          setLoading(false);
          reject(err);
        }
      }, 800);
    });
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('authUser');
    setUser(null);
  };

  // Check if the user is authenticated
  const isAuthenticated = () => {
    return !!user;
  };

  // Check if the user has a specific role
  const hasRole = (role) => {
    return user && user.role === role;
  };

  return {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated,
    hasRole
  };
}