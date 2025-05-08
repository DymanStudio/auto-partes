function App() {
  return (
    <ReactRouterDOM.BrowserRouter data-id="lrui4sdhm" data-path="App.js">
      <ReactRouterDOM.Routes data-id="qfuy3seuu" data-path="App.js">
        {/* Public Routes */}
        <ReactRouterDOM.Route
          path="./"
          element={
            <Layout data-id="me9bws9yj" data-path="App.js">
              <Home data-id="00enfjkmr" data-path="App.js" />
            </Layout>
          }
          data-id="i1fxbbwa9"
          data-path="App.js"
        />
        <ReactRouterDOM.Route
          path="./catalogo"
          element={
            <Layout data-id="me9bws9yj" data-path="App.js">
              <Catalog data-id="1hmg1vfvp" data-path="App.js" />
            </Layout>
          }
          data-id="5oxmaiff1"
          data-path="App.js"
        />
        <ReactRouterDOM.Route
          path="./nosotros"
          element={
            <Layout data-id="me9bws9yj" data-path="App.js">
              <About data-id="539uc9afa" data-path="App.js" />
            </Layout>
          }
          data-id="nk8gp9bzu"
          data-path="App.js"
        />
        <ReactRouterDOM.Route
          path="./contacto"
          element={
            <Layout data-id="me9bws9yj" data-path="App.js">
              <Contact data-id="okn7b8ku8" data-path="App.js" />
            </Layout>
          }
          data-id="1nlptruxr"
          data-path="App.js"
        />

        {/* Login Route (kept for future functionality) */}
        <ReactRouterDOM.Route
          path="./login"
          element={<Login data-id="juhjyodsq" data-path="App.js" />}
          data-id="ei94cnhjp"
          data-path="App.js"
        />

        {/* 404 Route */}
        <ReactRouterDOM.Route
          path="*"
          element={
            <Layout data-id="me9bws9yj" data-path="App.js">
              <NotFound data-id="x9ub3555k" data-path="App.js" />
            </Layout>
          }
          data-id="gfw5oxpk1"
          data-path="App.js"
        />
      </ReactRouterDOM.Routes>
    </ReactRouterDOM.BrowserRouter>
  );
}

// Layout component with common elements (header, footer)
function Layout({ children }) {
  return (
    <div className="app-container" data-id="27yxi8s0r" data-path="App.js">
      <Navbar data-id="5uaetqz1x" data-path="App.js" />
      <main className="main-content" data-id="ss3gupf1m" data-path="App.js">
        {children}
      </main>
      <Footer data-id="1o4dwfyhn" data-path="App.js" />
      <WhatsAppButton data-id="7ln776nd3" data-path="App.js" />
    </div>
  );
}

// NotFound page for 404 routes
function NotFound() {
  const navigate = ReactRouterDOM.useNavigate();
  const { data } = useStaticData();

  // Get UI text for NotFound page
  const uiText = data?.uiText?.notFound || {
    title: "Página No Encontrada",
    message: "La página que está buscando no existe o ha sido movida.",
    homeButton: "Volver al Inicio",
    catalogButton: "Ver Catálogo",
  };

  return (
    <div
      className="not-found-page py-16 text-center"
      data-id="fgdk7hiy4"
      data-path="App.js"
    >
      <div
        className="container mx-auto px-4"
        data-id="ncki38nit"
        data-path="App.js"
      >
        <div
          className="text-8xl text-primary mb-4"
          data-id="swrgbf7kf"
          data-path="App.js"
        >
          <i
            className="fas fa-exclamation-circle"
            data-id="vsnphjlyl"
            data-path="App.js"
          ></i>
        </div>
        <h1
          className="text-4xl font-bold mb-4"
          data-id="smho9xpxy"
          data-path="App.js"
        >
          {uiText.title}
        </h1>
        <p className="text-xl mb-8" data-id="nwldgd5ee" data-path="App.js">
          {uiText.message}
        </p>
        <div
          className="flex flex-col sm:flex-row justify-center gap-4"
          data-id="c5gj350gc"
          data-path="App.js"
        >
          <button
            className="btn"
            onClick={() => navigate("./")}
            data-id="g1wngc21c"
            data-path="App.js"
          >
            {uiText.homeButton}
          </button>
          <button
            className="btn bg-gray-700 hover:bg-gray-800"
            onClick={() => navigate("./catalogo")}
            data-id="60b5sqgna"
            data-path="App.js"
          >
            {uiText.catalogButton}
          </button>
        </div>
      </div>
    </div>
  );
}

// Footer component
function Footer() {
  const currentYear = new Date().getFullYear();
  const { data } = useStaticData();

  // Use data from custom hook, with fallbacks if not loaded yet
  const contactInfo = data?.contactInfo || {
    address: "Av. Libertador 1234, Ciudad Autónoma",
    phone: "+12 3456 7890",
    email: "info@autorepuestosexpress.com",
    socialMedia: {
      facebook: "https://facebook.com/autorepuestosexpress",
      instagram: "https://instagram.com/autorepuestosexpress",
      twitter: "https://twitter.com/autorepuestosx",
    },
  };

  const whatsappConfig = data?.whatsappConfig || {
    phoneNumber: "+1234567890",
  };

  const aboutContent = data?.aboutContent || {
    companyName: "AutoRepuestos Express",
  };

  const uiText = data?.uiText?.footer || {
    quickLinks: "Enlaces Rápidos",
    contact: "Contacto",
    socialMedia: "Redes Sociales",
    whatsappText: "Contáctanos por WhatsApp",
    companyDescription:
      "Tu proveedor de confianza para todas las autopartes que necesitas.",
    rights: "Todos los derechos reservados.",
  };

  return (
    <footer
      className="bg-gray-900 text-white"
      data-id="df10nufzh"
      data-path="App.js"
    >
      <div
        className="container mx-auto px-4 py-8"
        data-id="5wb97r7g9"
        data-path="App.js"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-id="emrjesxr2"
          data-path="App.js"
        >
          <div data-id="w4g6jlk9e" data-path="App.js">
            <h3
              className="text-xl font-bold mb-4"
              data-id="3dg0uacof"
              data-path="App.js"
            >
              {aboutContent.companyName}
            </h3>
            <p data-id="2kozo4k6g" data-path="App.js">
              {uiText.companyDescription}
            </p>
          </div>

          <div data-id="pfpd902c0" data-path="App.js">
            <h3
              className="text-lg font-bold mb-4"
              data-id="i7099unew"
              data-path="App.js"
            >
              {uiText.quickLinks}
            </h3>
            <ul className="space-y-2" data-id="9nkg4ze4j" data-path="App.js">
              <li data-id="z1nyuyz44" data-path="App.js">
                <ReactRouterDOM.Link
                  to="./"
                  className="hover:text-blue-300 transition-colors"
                  data-id="3laybevqg"
                  data-path="App.js"
                >
                  Inicio
                </ReactRouterDOM.Link>
              </li>
              <li data-id="2grgvqxao" data-path="App.js">
                <ReactRouterDOM.Link
                  to="./catalogo"
                  className="hover:text-blue-300 transition-colors"
                  data-id="n0mi5kned"
                  data-path="App.js"
                >
                  Catálogo
                </ReactRouterDOM.Link>
              </li>
              <li data-id="fauz40vxr" data-path="App.js">
                <ReactRouterDOM.Link
                  to="./nosotros"
                  className="hover:text-blue-300 transition-colors"
                  data-id="2sp3ff44z"
                  data-path="App.js"
                >
                  Nosotros
                </ReactRouterDOM.Link>
              </li>
              <li data-id="2c95ucls7" data-path="App.js">
                <ReactRouterDOM.Link
                  to="./contacto"
                  className="hover:text-blue-300 transition-colors"
                  data-id="mahx2dm4b"
                  data-path="App.js"
                >
                  Contacto
                </ReactRouterDOM.Link>
              </li>
            </ul>
          </div>

          <div data-id="u73ql0wk7" data-path="App.js">
            <h3
              className="text-lg font-bold mb-4"
              data-id="u35bhegz2"
              data-path="App.js"
            >
              {uiText.contact}
            </h3>
            <ul className="space-y-2" data-id="4urga5830" data-path="App.js">
              <li
                className="flex items-start"
                data-id="iohea0jr6"
                data-path="App.js"
              >
                <i
                  className="fas fa-map-marker-alt mt-1 mr-2"
                  data-id="84tfy0glo"
                  data-path="App.js"
                ></i>
                <span data-id="wc38gaob2" data-path="App.js">
                  {contactInfo.address}
                </span>
              </li>
              <li
                className="flex items-center"
                data-id="dl80not8o"
                data-path="App.js"
              >
                <i
                  className="fas fa-phone-alt mr-2"
                  data-id="z0z6awtpn"
                  data-path="App.js"
                ></i>
                <span data-id="gpkyjbpfx" data-path="App.js">
                  {contactInfo.phone}
                </span>
              </li>
              <li
                className="flex items-center"
                data-id="zlqdu2dap"
                data-path="App.js"
              >
                <i
                  className="fas fa-envelope mr-2"
                  data-id="7npmd3d27"
                  data-path="App.js"
                ></i>
                <span data-id="h6s0mh4xw" data-path="App.js">
                  {contactInfo.email}
                </span>
              </li>
            </ul>
          </div>

          <div data-id="1hpfk5865" data-path="App.js">
            <h3
              className="text-lg font-bold mb-4"
              data-id="uz5il3qs6"
              data-path="App.js"
            >
              {uiText.socialMedia}
            </h3>
            <div
              className="flex space-x-4"
              data-id="cunddm6kd"
              data-path="App.js"
            >
              <a
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                data-id="85ey1ivfe"
                data-path="App.js"
              >
                <i
                  className="fab fa-facebook-f text-xl"
                  data-id="4jham6ldl"
                  data-path="App.js"
                ></i>
              </a>
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
                data-id="75usy5myu"
                data-path="App.js"
              >
                <i
                  className="fab fa-instagram text-xl"
                  data-id="kv8gen016"
                  data-path="App.js"
                ></i>
              </a>
              <a
                href={contactInfo.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
                data-id="rhp0cehsx"
                data-path="App.js"
              >
                <i
                  className="fab fa-twitter text-xl"
                  data-id="mydyy1kj7"
                  data-path="App.js"
                ></i>
              </a>
            </div>
            <p className="mt-4" data-id="bsjh04xvs" data-path="App.js">
              <a
                href={`https://wa.me/${whatsappConfig.phoneNumber.replace(
                  /[^0-9]/g,
                  ""
                )}`}
                className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-id="bl5swipr4"
                data-path="App.js"
              >
                <i
                  className="fab fa-whatsapp mr-2 text-xl"
                  data-id="1du799rjk"
                  data-path="App.js"
                ></i>
                <span data-id="nz59h2jes" data-path="App.js">
                  {uiText.whatsappText}
                </span>
              </a>
            </p>
          </div>
        </div>

        <div
          className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400"
          data-id="hn4c5bgi5"
          data-path="App.js"
        >
          <p data-id="l2eyg6o53" data-path="App.js">
            &copy; {currentYear} {aboutContent.companyName}. {uiText.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
