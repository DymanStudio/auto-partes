// Authentication utility functions
const AUTH_KEY = 'auto_repuestos_admin_auth';

// Admin credentials
const ADMIN_CREDENTIALS = {
  username: 'usuario220',
  password: 'usuario2202025'
};

// Check if user is logged in
function isAuthenticated() {
  const authData = localStorage.getItem(AUTH_KEY);
  if (!authData) return false;

  try {
    const { expiry } = JSON.parse(authData);
    // Check if token is expired
    if (expiry && new Date().getTime() > expiry) {
      logout(); // Clear expired token
      return false;
    }
    return true;
  } catch (error) {
    console.error('Auth validation error:', error);
    return false;
  }
}

// Login function
function login(username, password) {
  if (username === ADMIN_CREDENTIALS.username &&
  password === ADMIN_CREDENTIALS.password) {
    // Create authentication token with 24-hour expiry
    const expiry = new Date().getTime() + 24 * 60 * 60 * 1000;
    const authData = { username, expiry };
    localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
    return true;
  }
  return false;
}

// Logout function
function logout() {
  localStorage.removeItem(AUTH_KEY);
}

// This hook can be used to protect admin routes
function useAdminAuth() {
  const navigate = ReactRouterDOM.useNavigate();
  const location = ReactRouterDOM.useLocation();

  React.useEffect(() => {
    if (!isAuthenticated() && location.pathname.startsWith('/admin')) {
      // Redirect to login
      navigate('/login?redirect=' + encodeURIComponent(location.pathname));
    }
  }, [navigate, location]);

  return { isAuthenticated, logout };
}