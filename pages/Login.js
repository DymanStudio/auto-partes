function Login() {
  const [credentials, setCredentials] = React.useState({
    username: '',
    password: ''
  });
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = ReactRouterDOM.useNavigate();
  const location = ReactRouterDOM.useLocation();

  // If already authenticated, redirect to admin
  React.useEffect(() => {
    if (isAuthenticated()) {
      const redirectTo = new URLSearchParams(location.search).get('redirect') || '/admin';
      navigate(redirectTo);
    }
  }, [navigate, location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const { username, password } = credentials;

      if (login(username, password)) {
        const redirectTo = new URLSearchParams(location.search).get('redirect') || '/admin';
        navigate(redirectTo);
      } else {
        setError('Credenciales incorrectas. Por favor, intente nuevamente.');
      }
      setIsLoading(false);
    }, 800); // Small delay to simulate server request
  };

  return (
    <div className="login-page page-content" data-id="nlwi0t8li" data-path="pages/Login.js">
      <div className="container mx-auto px-4 flex justify-center items-center min-h-[calc(100vh-200px)]" data-id="2gbdz3soo" data-path="pages/Login.js">
        <div className="login-container" data-id="pd8jwo9r8" data-path="pages/Login.js">
          <div className="login-header" data-id="u6gaseq6z" data-path="pages/Login.js">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3774/3774278.png"
              alt="AutoRepuestos Express Logo"
              className="login-logo" data-id="hxhvkakt6" data-path="pages/Login.js" />

            <h1 data-id="eo6qtfglw" data-path="pages/Login.js">Admin Panel - Acceso</h1>
          </div>
          
          {error &&
          <div className="login-error" data-id="5wcvnoo29" data-path="pages/Login.js">
              <i className="fas fa-exclamation-circle mr-2" data-id="1p28ilx9d" data-path="pages/Login.js"></i>
              {error}
            </div>
          }
          
          <form onSubmit={handleSubmit} className="login-form" data-id="8jiuja7pi" data-path="pages/Login.js">
            <div className="form-group" data-id="eua0n0ox3" data-path="pages/Login.js">
              <label htmlFor="username" data-id="0oeyjwjb5" data-path="pages/Login.js">Usuario</label>
              <div className="input-with-icon" data-id="myaps82xo" data-path="pages/Login.js">
                <i className="fas fa-user" data-id="hey070fm6" data-path="pages/Login.js"></i>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                  autoComplete="username"
                  placeholder="Ingrese su usuario" data-id="4qkgbhl0y" data-path="pages/Login.js" />

              </div>
            </div>
            
            <div className="form-group" data-id="z03put1u2" data-path="pages/Login.js">
              <label htmlFor="password" data-id="ucrqcesv5" data-path="pages/Login.js">Contraseña</label>
              <div className="input-with-icon" data-id="li1odsv3k" data-path="pages/Login.js">
                <i className="fas fa-lock" data-id="5ua58wptu" data-path="pages/Login.js"></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  placeholder="Ingrese su contraseña" data-id="zge6lntrb" data-path="pages/Login.js" />

              </div>
            </div>
            
            <button
              type="submit"
              className="login-button"
              disabled={isLoading} data-id="brjztsohn" data-path="pages/Login.js">

              {isLoading ?
              <span className="flex items-center justify-center" data-id="lifzo4t11" data-path="pages/Login.js">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-id="kwlss2pj9" data-path="pages/Login.js">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" data-id="1ea4whljp" data-path="pages/Login.js"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-id="dhvt6jx34" data-path="pages/Login.js"></path>
                  </svg>
                  Iniciando sesión...
                </span> :

              <>
                  <i className="fas fa-sign-in-alt mr-2" data-id="2kl9zvax0" data-path="pages/Login.js"></i>
                  Iniciar Sesión
                </>
              }
            </button>
          </form>
          
          <div className="login-footer" data-id="dy5t9cyud" data-path="pages/Login.js">
            <ReactRouterDOM.Link to="/" className="back-to-site" data-id="4qa26corc" data-path="pages/Login.js">
              <i className="fas fa-arrow-left mr-2" data-id="m1go0gzao" data-path="pages/Login.js"></i>
              Volver al sitio
            </ReactRouterDOM.Link>
          </div>
        </div>
      </div>
    </div>);

}