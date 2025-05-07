function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { pathname } = ReactRouterDOM.useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar" data-id="jnyjbl8bd" data-path="components/Navbar.js">
      <div className="navbar-container" data-id="ro6piw6yi" data-path="components/Navbar.js">
        <ReactRouterDOM.Link to="/" className="navbar-logo" onClick={closeMenu} data-id="oqeinh15h" data-path="components/Navbar.js">
          <img src="https://cdn-icons-png.flaticon.com/512/3774/3774278.png" alt="AutoRepuestos Express Logo" data-id="bzdk7t21c" data-path="components/Navbar.js" />
          <h1 data-id="za7ovx1i2" data-path="components/Navbar.js">AutoRepuestos Express</h1>
        </ReactRouterDOM.Link>
        
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation" data-id="zrmu19qdk" data-path="components/Navbar.js">
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} data-id="vs0fm3s4q" data-path="components/Navbar.js"></i>
        </button>
        
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`} data-id="n54tk81h1" data-path="components/Navbar.js">
          <ReactRouterDOM.NavLink
            to="/"
            className={({ isActive }) =>
            `navbar-link ${isActive || pathname === '/' ? 'active' : ''}`
            }
            onClick={closeMenu} data-id="658c21hmk" data-path="components/Navbar.js">

            Inicio
          </ReactRouterDOM.NavLink>
          
          <ReactRouterDOM.NavLink
            to="/catalogo"
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu} data-id="6okqg77is" data-path="components/Navbar.js">

            Catálogo
          </ReactRouterDOM.NavLink>
          
          <ReactRouterDOM.NavLink
            to="/nosotros"
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu} data-id="o4obi6diz" data-path="components/Navbar.js">

            Nosotros
          </ReactRouterDOM.NavLink>
          
          <ReactRouterDOM.NavLink
            to="/contacto"
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu} data-id="buhw6oeij" data-path="components/Navbar.js">

            Contacto
          </ReactRouterDOM.NavLink>
        </div>
      </div>
    </nav>);

}